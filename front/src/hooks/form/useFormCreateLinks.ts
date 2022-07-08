import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { usePostTravelink } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { useRecoilValue } from 'recoil'
import { useUploadImage } from '../upload/useUploadImage'

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

export const useFormCreateLinks = () => {
  const [disabled, setDisabled] = useBoolean()
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const { downloadUrl, uploadImage, image, handleChangeImage } =
    useUploadImage()

  const currentUser = useRecoilValue(currentUserState)

  const postTravelink = usePostTravelink

  const { fields, append } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = async (data: Inputs) => {
    if (!currentUser) return

    try {
      setDisabled.on()
      if (image) uploadImage(image)
      const res = await postTravelink(
        { ...data, thumbnail: downloadUrl },
        currentUser.uid
      )
      router.push(router.basePath + res)
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
    onSubmit,
    errors,
    disabled,
    downloadUrl,
    handleChangeImage,
    image
  }
}
