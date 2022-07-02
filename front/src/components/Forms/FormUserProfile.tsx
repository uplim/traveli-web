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
    handleChangeName,
    handleChangeIcon,
    error,
    iconUrl,
    name,
    data
  } = useCreateUpdateUserProfile()

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
              onChange={handleChangeName}
            />
            <FormLabel htmlFor="icon">アイコン</FormLabel>
            <Avatar src={iconUrl} w={'6rem'} h={'6rem'} />
            <Input
              id="icon"
              type="file"
              accept="image/*"
              {...register('icon')}
              onChange={handleChangeIcon}
            />
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      )}
    </>
  )
}
