import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Alert,
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel
} from '@chakra-ui/react'
import { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const User = () => {
  const firestorage = getStorage()
  const { register, handleSubmit } = useForm<Inputs>()
  const [name, setName] = useState('')
  const [image, setImage] = useState<File | null>()
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files)
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO: いるかも？
    // event.preventDefault()
    alert(JSON.stringify(data))
    try {
      if (image) {
        const imageRef = ref(firestorage, image.name)
        uploadBytes(imageRef, image).then((snapshot) => {
          getDownloadURL(imageRef).then((url) => {
            // console.log(url)
          })
        })
      }
    } catch (err) {
      // console.log(err)
      setError(true)
    }
    // console.log(data.name)
    // console.log(data.icon[0].name)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <Alert>送信できませんでした</Alert>}
      <p>テストページ</p>
      <FormControl>
        <FormLabel htmlFor="name">名前</FormLabel>
        <Input
          id="name"
          {...register('name')}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel htmlFor="icon">アイコン</FormLabel>
        <Avatar
          src={
            image ? URL.createObjectURL(image) : 'https://bit.ly/ryan-florence'
          }
        />
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
  )
}

export default User
