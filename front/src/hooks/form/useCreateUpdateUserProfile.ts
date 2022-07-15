import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { Profile } from '@/types/db'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useBoolean } from '@chakra-ui/react'

type Inputs = {
  name: string
}

const schema = yup.object({
  name: yup.string().required('名前を入力してください')
})

export const useCreateUpdateUserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schema) })
  
  const currentUser = useRecoilValue(currentUserState)
  const firestorage = getStorage()
  const [image, setImage] = useState<File | null>()
  const [name, setName] = useState('')
  const [iconUrl, setIconUrl] = useState('')
  const [error, setError] = useState(false)
  const [disabled, setDisabled] = useBoolean()

  useEffect(() => {
    const getProfile = async () => {
      if (!currentUser) return
      const db = getFirestore()
      const profilesCollection = collection(db, 'profiles')
      const profileRef = doc(profilesCollection, currentUser.uid)
      const document = await getDoc(profileRef)
      const data = document.data()

      if (!data) return
      setIconUrl(data.icon)
      setName(data.name)

      return data
    }
    getProfile()
  }, [])

  const createProfileIfNotFound = async (profile: Profile) => {
    if (!currentUser) return
    const db = getFirestore()
    const profilesCollection = collection(db, 'profiles')
    const profileRef = doc(profilesCollection, currentUser.uid)

    if (profile.name == '' && profile.icon) {
      setIconUrl(profile.icon)
      await updateDoc(profileRef, {
        icon: profile.icon
      })
    } else if (profile.name && profile.icon == '') {
      setName(profile.name)
      await updateDoc(profileRef, {
        name: profile.name
      })
    } else if (profile.name && profile.icon) {
      setIconUrl(profile.icon)
      setName(profile.name)
      await setDoc(profileRef, {
        name: profile.name,
        icon: profile.icon
      })
    } else {
      return
    }
  }

  // react-hook-formでinput[type="file"]上手くいかない
  // https://zenn.dev/akira_miyake/articles/0b08cf732e7c0a
  const handleChangeIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO: いるかも？
    // event.preventDefault()
    try {
      setDisabled.on()
      if (image) {
        const imageRef = ref(firestorage, encodeURI(image.name))

        uploadBytes(imageRef, image).then(() => {
          getDownloadURL(imageRef).then((url) => {
            const req = {
              name: data.name,
              icon: url
            }
            createProfileIfNotFound(req)
          })
        })
      } else if (!image && data.name) {
        const req = {
          name: data.name,
          icon: ''
        }

        createProfileIfNotFound(req)

        // TODO: アラートをいい感じに表示する
        alert('保存されました')
      }
    } catch (err) {
      setError(true)
    }finally{
      setDisabled.off()
    }
  }

  return {
    onSubmit,
    handleSubmit,
    register,
    handleChangeIcon,
    error,
    iconUrl,
    name,
    image,
    errors,
    disabled
  }
}
