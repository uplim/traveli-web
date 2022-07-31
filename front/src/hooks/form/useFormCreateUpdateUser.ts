import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBoolean } from '@chakra-ui/react'
import { useUploadImage } from '@/hooks/upload'
import { useUpdateUser } from '@/hooks/firestore'
import { UserType } from '@/types/db'
import { useRecoilValue } from 'recoil'
import { historyState } from '@/recoil/atoms'
import { useRouter } from 'next/router'

type Inputs = {
  name: string
}

const schema = yup.object({
  name: yup.string().required('ニックネームを入力してください')
})

export const useFormCreateUpdateUser = (userData: UserType) => {
  const history = useRecoilValue(historyState)
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: userData.name }
  })

  const { uploadImage, image, handleChangeImage, isImageChanged } =
    useUploadImage()

  const updateUser = useUpdateUser

  const onSubmit = async (data: Inputs) => {
    const req = data as UserType

    try {
      setDisabled.on()
      // 画像に変更が入っていたらrequest bodyに画像を含める
      if (image && isImageChanged) {
        const downloadUrl = await uploadImage(image)
        req.icon = downloadUrl
      }

      await updateUser(req, userData.uid)
    } catch (err) {
      console.error(err)
    } finally {
      if (history === '/') {
        router.push('/home')
      }
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
    history
  }
}
