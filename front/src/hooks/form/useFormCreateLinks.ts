import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { useCreateTravelink, useGetOwnerProfile } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { useRecoilValue } from 'recoil'
import { useUploadImage } from '@/hooks/upload'

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
    resolver: yupResolver(schema),
    // 初めにからのfield一つ表示されるようにする
    defaultValues: {
      links: [
        {
          url: '',
          label: ''
        }
      ]
    }
  })

  const { uploadImage, image, handleChangeImage } = useUploadImage()

  const currentUser = useRecoilValue(currentUserState)

  const { ownerProfile } = useGetOwnerProfile(currentUser?.uid)

  const createTravelink = useCreateTravelink

  const { fields, append, remove } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = async (data: Inputs) => {
    if (!currentUser) return
    if (!ownerProfile) return
    let downloadUrl = ''

    try {
      setDisabled.on()
      if (image) {
        downloadUrl = await uploadImage(image)
      }
      // if (!ownerProfile) return
      const res = await createTravelink(
        {
          ...data,
          thumbnail: downloadUrl,
          ownerIcon: ownerProfile?.icon,
          ownerName: ownerProfile?.name
        },
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
    remove,
    onSubmit,
    errors,
    disabled,
    handleChangeImage,
    image
  }
}
