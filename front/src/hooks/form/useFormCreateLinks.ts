import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'
import { usePostTravelink } from '@/firestore/travelink'
import { currentUserState } from '@/recoil/atoms'
import { useRecoilValue } from 'recoil'

type Inputs = {
  title: string
  date: string
  thumbnail: string
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
      const res = await postTravelink(data, currentUser.uid)
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
    disabled
  }
}
