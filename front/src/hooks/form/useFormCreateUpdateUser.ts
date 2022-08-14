import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBoolean } from '@chakra-ui/react'
import { useUploadImage } from '@/hooks/upload'
import { useUpdateUser } from '@/hooks/firestore'
import { UserType } from '@/types/db'
import { useRouter } from 'next/router'

type Inputs = {
  name: string
}

const schema = yup.object({
  name: yup.string().required('ニックネームを入力してください')
})

export const useFormCreateUpdateUser = (userData: UserType) => {
  const router = useRouter()
  const { isFirst } = router.query

  const [disabled, setDisabled] = useBoolean()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: userData.name }
  })

  const { uploadImage, image, imageFile, handleChangeImage, isImageChanged } =
    useUploadImage()

  const updateUser = useUpdateUser

  const onSubmit = async (data: Inputs) => {
    const req = data as UserType

    try {
      setDisabled.on()
      // 画像に変更が入っていたらrequest bodyに画像を含める
      if (imageFile && isImageChanged) {
        const downloadUrl = await uploadImage(imageFile)
        req.icon = downloadUrl
      }

      await updateUser(req, userData.uid)

      if (isFirst) {
        router.push('/home')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled.off()
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    disabled,
    handleChangeImage,
    image,
    isFirst
  }
}
