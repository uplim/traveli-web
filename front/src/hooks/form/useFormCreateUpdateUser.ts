import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBoolean } from '@chakra-ui/react'
import { useUploadImage } from '@/hooks/upload'
import { useCreateUser, useUpdateUser } from '@/hooks/firestore'
import { UserType } from '@/types/db'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

type Inputs = {
  name: string
  icon: string
}

const schema = yup.object({
  name: yup.string().required('ニックネームを入力してください'),
  icon: yup.string().nullable()
})

export const useFormCreateUpdateUser = (userData: UserType) => {
  const router = useRouter()
  const { isFirst } = router.query
  const [isUploading, setIsUploading] = useBoolean()
  const [disabled, setDisabled] = useBoolean()
  const createUser = useCreateUser
  const uploadImage = useUploadImage
  const updateUser = useUpdateUser

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: userData.name, icon: userData.icon ?? '' }
  })

  const currentIcon = useWatch({
    control,
    name: 'icon'
  })

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsUploading.on()
    if (event.currentTarget.files) {
      const url =
        (await uploadImage(event.currentTarget.files[0], 'users')) || ''
      setValue('icon', url)
    }
    setIsUploading.off()
  }

  const onSubmit = async (data: Inputs) => {
    setDisabled.on()

    isFirst ? await create(data) : await update(data)

    if (isFirst) {
      router.push('/home')
    }

    setDisabled.off()
  }

  const create = async (data: Inputs) => {
    try {
      await createUser({
        ...data,
        uid: userData.uid,
        isAnonymous: userData.isAnonymous
      })
    } catch {
      toast.error('プロフィールの作成に失敗しました。')
    }
  }

  const update = async (data: Inputs) => {
    try {
      await updateUser({
        ...data,
        uid: userData.uid,
        isAnonymous: userData.isAnonymous
      })
      toast.success('プロフィールを保存しました。')
    } catch {
      toast.error('プロフィールの保存に失敗しました。')
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    disabled,
    handleUploadFile,
    isFirst,
    isUploading,
    currentIcon
  }
}
