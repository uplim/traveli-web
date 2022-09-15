import { useRouter } from 'next/router'
import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { useCreateTravelink, useUpdateTravelink } from '@/hooks/firestore'
import { useUploadImage } from '@/hooks/upload'
import { UserType, TravelinkRequestType, CategoryType } from '@/types/db'

export type Inputs = {
  title: string
  date: [Date | null, Date | null]
  thumbnail: string
  links: {
    url: string
    label: string
    category: CategoryType
  }[]
  canEdit: boolean
}

const schema = yup.object({
  title: yup.string().required('旅の名前を入力してください'),
  date: yup.array(),
  thumbnail: yup.string().nullable(),
  links: yup.array().of(
    yup.object().shape({
      category: yup.string().required('カテゴリーを入力してください'),
      url: yup
        .string()
        .required('urlを入力してください')
        // urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
          message: '利用可能なURLを入力してください'
        }),
      label: yup.string()
    })
  )
})

export const useFormCreateUpdateLinks = (
  travelinkData?: TravelinkRequestType,
  userData?: UserType
) => {
  const [disabled, setDisabled] = useBoolean()
  const [isUploading, setIsUploading] = useBoolean()
  const router = useRouter()
  const traveliId = router.query.traveliId as string

  const formatedDate = travelinkData?.date.map((item) => {
    return item ? item.toDate() : null
  })

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...travelinkData,
      date: formatedDate
        ? (formatedDate as [Date | null, Date | null])
        : [null, null]
    }
  })

  const uploadImage = useUploadImage
  const createTravelink = useCreateTravelink
  const updateTravelink = useUpdateTravelink

  const { fields, append, remove } = useFieldArray({
    name: 'links',
    control: control
  })

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsUploading.on()
    if (event.currentTarget.files) {
      const url =
        (await uploadImage(event.currentTarget.files[0], 'links')) || ''
      setValue('thumbnail', url)
    }
    setIsUploading.off()
  }

  const currentThumbnail = useWatch({
    control,
    name: 'thumbnail'
  })
  const currentLinks = useWatch({
    control,
    name: 'links'
  })

  const onSubmit = async (data: Inputs) => {
    const req = data as TravelinkRequestType

    setDisabled.on()
    !travelinkData ? await create(req) : await update(req)
    setDisabled.off()
  }

  const create = async (data: TravelinkRequestType) => {
    if (!userData) return

    const res = await createTravelink(
      {
        ...data,
        ownerIcon: userData.icon ? userData.icon : '',
        ownerName: userData.name ? userData.name : ''
      },
      userData.uid
    )
    router.push(`/${res}`)
  }

  const update = async (data: TravelinkRequestType) => {
    await updateTravelink(data, traveliId)
    router.push(`/${traveliId}`)
  }

  return {
    register,
    handleSubmit,
    fields,
    append,
    remove,
    control,
    onSubmit,
    errors,
    disabled,
    handleUploadFile,
    setValue,
    isUploading,
    currentThumbnail,
    currentLinks
  }
}
