import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'
import { useBoolean } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'

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
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const currentUser = useRecoilValue(currentUserState)

  const postTravelinks = async (data: Inputs) => {
    if (!currentUser) return
    const db = getFirestore()
    const travelinksCollection = collection(db, 'travelinks')
    const travelinksRef = doc(travelinksCollection)

    await setDoc(travelinksRef, {
      ...data,
      traveliId: travelinksRef.id,
      uid: currentUser.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
  }

  const { fields, append } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = (data: Inputs) => {
    try {
      setDisabled.on()
      postTravelinks(data)
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
