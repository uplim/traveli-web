import { useState } from 'react'
import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { useCreateTravelink, useUpdateTravelink } from '@/hooks/firestore'
import { useUploadImage } from '@/hooks/upload'
import { CategoryType, UserType, TravelinkRequestType } from '@/types/db'
import { toast } from 'react-toastify'

export type Inputs = {
  title: string
  date: [Date | null, Date | null]
  links: {
    url: string
    label: string
    category: string
  }[]
  canEdit: boolean
}

const schema = yup.object({
  title: yup.string().required('旅の名前を入力してください'),
  date: yup.array(),
  links: yup.array().of(
    yup.object().shape({
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
  const [categories, setCategories] = useState<CategoryType[]>(
    travelinkData ? travelinkData.links.map((link) => link.category) : []
  )
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

  const { uploadImage, imageFile, image, handleChangeImage, isImageChanged } =
    useUploadImage()

  const createTravelink = useCreateTravelink
  const updateTravelink = useUpdateTravelink

  const { fields, append, remove } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = async (data: Inputs) => {
    const mergeCategoriesIntoLinks = data.links.map((link, index) => {
      link.category = categories[index]
      return link
    })
    const req = {
      ...data,
      links: mergeCategoriesIntoLinks
    } as TravelinkRequestType

    try {
      setDisabled.on()
      // 画像に変更が入っていたらrequest bodyに画像を含める
      if (imageFile && isImageChanged) {
        const downloadUrl = await uploadImage(imageFile)
        req.thumbnail = downloadUrl
      }

      !travelinkData ? await create(req) : await update(req, traveliId)
    } catch (err) {
      typeof err === 'string' && toast.error(err)
      console.error(err)
    } finally {
      setDisabled.off()
    }
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

  const update = async (data: TravelinkRequestType, traveliId: string) => {
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
    handleChangeImage,
    image,
    categories,
    setCategories,
    setValue
  }
}
