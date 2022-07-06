import {
  Alert,
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel
} from '@chakra-ui/react'
import { useCreateUpdateUserProfile } from '@/hooks/form'

export const FormUserProfile = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    handleChangeIcon,
    error,
    iconUrl,
    name,
    image
  } = useCreateUpdateUserProfile()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <Alert>送信できませんでした</Alert>}
        <p>テストページ</p>
        <FormControl>
          <FormLabel htmlFor="name">名前</FormLabel>
          <Input id="name" defaultValue={name} {...register('name')} />
          <FormLabel htmlFor="icon">アイコン</FormLabel>
          <Avatar
            src={image ? URL.createObjectURL(image) : iconUrl}
            w={'6rem'}
            h={'6rem'}
          />
          <Input
            id="icon"
            type="file"
            accept="image/*"
            onChange={handleChangeIcon}
          />
          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </>
  )
}
