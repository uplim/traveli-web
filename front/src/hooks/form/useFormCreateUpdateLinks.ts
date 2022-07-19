import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { useCreateTravelink, useUpdateTravelink } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { useRecoilValue } from 'recoil'
import { useUploadImage } from '@/hooks/upload'
import { CurrentUser, Profile, TravelinkRequestType } from '@/types/db'

type Inputs = {
  title: string
  date: [Date | null, Date | null]
  links: {
    category: string
    url: string
    label: string
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
  formType: 'create' | 'update',
  travelinkData?: TravelinkRequestType,
  ownerProfile?: Profile
) => {
  const [disabled, setDisabled] = useBoolean()
  const router = useRouter()
  const traveliId = router.query.traveliId as string

  const formatedDate = travelinkData?.date.map((item) => {
    return item ? item.toDate() : null
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...travelinkData,
      date: formatedDate as [Date | null, Date | null]
    }
  })

  const { uploadImage, image, handleChangeImage, isImageChanged } =
    useUploadImage()

  const currentUser = useRecoilValue(currentUserState)

  const createTravelink = useCreateTravelink
  const updateTravelink = useUpdateTravelink

  const { fields, append, remove } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = async (data: Inputs) => {
    if (!currentUser) return

    const req = data as TravelinkRequestType

    try {
      setDisabled.on()
      // 画像に変更が入っていたらrequest bodyに画像を含める
      if (image && isImageChanged) {
        const downloadUrl = await uploadImage(image)
        req.thumbnail = downloadUrl
      }

      formType === 'create' ? create(req, currentUser) : update(req, traveliId)
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled.off()
    }
  }

  const create = async (
    data: TravelinkRequestType,
    currentUser: CurrentUser
  ) => {
    if (!ownerProfile) return

    const res = await createTravelink(
      {
        ...data,
        ownerIcon: ownerProfile.icon,
        ownerName: ownerProfile.name
      },
      currentUser.uid
    )
    router.push(window.location.origin + res)
  }

  const update = async (data: TravelinkRequestType, traveliId: string) => {
    await updateTravelink(data, traveliId)
    router.push(window.location.origin + traveliId)
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
    image
  }
}
