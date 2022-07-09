import {
  Input,
  Box,
  FormControl,
  FormLabel,
  List,
  ListItem,
  Button,
  FormErrorMessage,
  Switch,
  Image
} from '@chakra-ui/react'
import { useFormCreateLinks } from '@/hooks/form'

export const FormCreateLinks = () => {
  const {
    register,
    handleSubmit,
    fields,
    append,
    onSubmit,
    errors,
    disabled,
    image,
    handleChangeImage
  } = useFormCreateLinks()

  return (
    <Box>
      <FormControl isInvalid={errors.title ? true : false}>
        <FormLabel>旅の名前</FormLabel>
        <Input
          {...register('title')}
          placeholder={'例）ともだちとの一泊二日の旅行'}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.date ? true : false}>
        <FormLabel>日時（任意）</FormLabel>
        <Input placeholder={'2022/01/23'} {...register('date')} />
        <FormErrorMessage>
          {errors.date && errors.date.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>サムネイル画像（任意）</FormLabel>
        <Input type={'file'} accept="image/*" onChange={handleChangeImage} />
        <Image alt={''} src={image ? URL.createObjectURL(image) : ''} />
      </FormControl>
      <FormControl>
        <List>
          {fields.map((item, index) => {
            return (
              <ListItem key={item.id}>
                <FormControl isInvalid={!!errors.links}>
                  <FormLabel>URL</FormLabel>
                  <Input
                    isInvalid={errors.links?.[index] ? true : false}
                    {...register(`links.${index}.url`)}
                  />
                  <FormErrorMessage>
                    {errors.links?.[index] &&
                      errors.links?.[index].url?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormLabel>ラベル</FormLabel>
                <Input {...register(`links.${index}.label`)} />
              </ListItem>
            )
          })}
        </List>
        <button
          type="button"
          onClick={() => {
            append({ url: '', label: '' })
          }}
        >
          append
        </button>
        <FormControl display={'flex'} alignItems={'center'}>
          <FormLabel>他のユーザに編集を許可する</FormLabel>
          <Switch {...register('canEdit')} />
        </FormControl>
        <Button
          disabled={disabled}
          onClick={handleSubmit(onSubmit)}
          variant={'solid'}
        >
          送信する
        </Button>
      </FormControl>
    </Box>
  )
}
