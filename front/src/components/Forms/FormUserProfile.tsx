import {
  Alert,
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage
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
    image,
    errors
  } = useCreateUpdateUserProfile()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <Alert>送信できませんでした</Alert>}
        <p>テストページ</p>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">名前</FormLabel>
          <Input id="name" defaultValue={name} {...register('name')} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
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
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
