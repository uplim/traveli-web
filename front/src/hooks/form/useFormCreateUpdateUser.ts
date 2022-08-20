import { useForm, Path } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBoolean } from '@chakra-ui/react'
import { useUploadImage } from '@/hooks/upload'
import { useCreateUser, useUpdateUser } from '@/hooks/firestore'
import { UserType } from '@/types/db'
import { useRouter } from 'next/router'

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

  const [disabled, setDisabled] = useBoolean()
  const createUser = useCreateUser
  const uploadImage = useUploadImage
  const updateUser = useUpdateUser

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: userData.name, icon: userData.icon ?? '' }
  })

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
    name: Path<Inputs>
  ) => {
    if (event.currentTarget.files) {
      const url = (await uploadImage(event.currentTarget.files[0])) || ''
      setValue(name, url)
    }
  }

  const { icon: currentIcon } = getValues()

  const onSubmit = async (data: Inputs) => {
    try {
      setDisabled.on()

      isFirst ? await create(data) : await update(data)

      if (isFirst) {
        router.push('/home')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled.off()
    }
  }

  const create = async (data: Inputs) => {
    await createUser({
      ...data,
      uid: userData.uid,
      isAnonymous: userData.isAnonymous
    })
  }

  const update = async (data: Inputs) => {
    await updateUser({
      ...data,
      uid: userData.uid,
      isAnonymous: userData.isAnonymous
    })
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    disabled,
    handleUploadFile,
    isFirst,
    currentIcon
  }
}
