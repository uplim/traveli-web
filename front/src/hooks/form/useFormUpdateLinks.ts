import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { useUpdateTravelink } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { useRecoilValue } from 'recoil'
import { useUploadImage } from '@/hooks/upload'
import { TravelinkRequestType } from '@/types/db'

type Inputs = {
  title: string
  date: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
}

const schema = yup.object({
  title: yup.string().required('旅の名前を入力してください'),
  date: yup.string(),
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

export const useFormUpdateLinks = (data: TravelinkRequestType) => {
  const [disabled, setDisabled] = useBoolean()
  const router = useRouter()
  const { traveliId } = router.query

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...data
    }
  })

  const { uploadImage, image, handleChangeImage, isImageChanged } = useUploadImage()

  const currentUser = useRecoilValue(currentUserState)

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

      await updateTravelink(req, traveliId as string)
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled.off()
    }
  }

  return {
    register,
    handleSubmit,
    fields,
    append,
    remove,
    onSubmit,
    errors,
    disabled,
    handleChangeImage,
    image
  }
}
