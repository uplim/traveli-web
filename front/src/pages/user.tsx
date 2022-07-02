import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Alert,
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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

const User = () => {
  const firestorage = getStorage()
  const { register, handleSubmit } = useForm<Profile>()
  const [image, setImage] = useState<File | null>()
  const [name, setName] = useState('')
  const [iconUrl, setIconUrl] = useState('')
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const currentUser = useRecoilValue(currentUserState)

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
    setData(getProfile)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  const onSubmit: SubmitHandler<Profile> = (data) => {
    // TODO: いるかも？
    // event.preventDefault()

    try {
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
      }
    } catch (err) {
      setError(true)
    }
  }
  return (
    <>
      {!data ? (
        //TODO: 画像のちらつき
        <>ローディングicon</>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <Alert>送信できませんでした</Alert>}
          <p>テストページ</p>
          <FormControl>
            <FormLabel htmlFor="name">名前</FormLabel>
            <Input
              id="name"
              defaultValue={name}
              {...register('name')}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel htmlFor="icon">アイコン</FormLabel>
            <Avatar src={iconUrl} w={'6rem'} h={'6rem'} />
            <Input
              id="icon"
              type="file"
              accept="image/*"
              {...register('icon')}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      )}
    </>
  )
}

export default User
