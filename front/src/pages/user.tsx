import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Alert,
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Spacer,
  Box,
  VisuallyHiddenInput
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
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
import { IconReturn } from './../components/Icons/IconReturn'

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

  const inputRef = useRef<HTMLInputElement>(null)

  const onClickButton = () => {
    inputRef.current?.click()
  }

  return (
    <>
      {!data ? (
        //TODO: 画像のちらつき
        <>ローディングicon</>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <Alert>送信できませんでした</Alert>}
          {/* Header */}
          <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
            <IconReturn w={'2.2rem'} h={'2.2rem'} />
            <Spacer />
            <Box color={'black'} fontSize={'md'} fontWeight={'bold'}>
              プロフィール
            </Box>
            <Spacer />
            <Box w={'2.2rem'} h={'2.2rem'} />
          </Flex>

          <FormControl>
            {/* icon */}
            <Flex>
              {/* TODO:shadowのつき方 */}
              <Spacer />
              <Box
                borderRadius={'50%'}
                filter={'drop-shadow(4px 4px 10px #E4EBEE);'}
                marginBottom={'2.4rem'}
                bgColor={'base'}
              >
                <Avatar
                  src={iconUrl}
                  w={'12.9rem'}
                  h={'12.9rem'}
                  as={'button'}
                  onClick={onClickButton}
                />
              </Box>
              <Spacer />
            </Flex>

            <VisuallyHiddenInput
              {...register('icon')}
              onChange={handleChange}
              ref={inputRef}
              id="icon"
              type="file"
              accept="image/*"
            />

            <FormLabel htmlFor="name" fontSize={'md'}>
              ニックネーム
            </FormLabel>
            <Flex>
              <Spacer />
              <Input
                variant={'filled'}
                w={'34.4rem'}
                h={'4.6rem'}
                borderRightRadius={'10rem'}
                borderLeftRadius={'10rem'}
                bgColor={'white'}
                filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
                id="name"
                defaultValue={name}
                {...register('name')}
                onChange={(e) => setName(e.target.value)}
              />
              <Spacer />
            </Flex>

            {/* Button */}
            <Flex>
              <Spacer />
              <Flex>
                <Button marginTop={'29.9rem'} type={'submit'} variant={'round'}>
                  決定
                </Button>
              </Flex>
              <Spacer />
            </Flex>
          </FormControl>
        </form>
      )}
    </>
  )
}

export default User
