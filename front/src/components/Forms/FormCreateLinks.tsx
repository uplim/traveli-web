import {
  Input,
  Box,
  FormControl,
  FormLabel,
  List,
  ListItem,
  Button,
  FormErrorMessage
} from '@chakra-ui/react'
import { useFormCreateLinks } from '@/hooks/form'

export const FormCreateLinks = () => {
  const { register, handleSubmit, fields, append, onSubmit, errors } =
    useFormCreateLinks()

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
      <FormControl {...register('date')} isInvalid={errors.date ? true : false}>
        <FormLabel>日時（任意）</FormLabel>
        <Input placeholder={'0000/00/00-0000/00/00'} />
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
        <Button onClick={handleSubmit(onSubmit)} variant={'solid'}>
          送信する
        </Button>
      </FormControl>
    </Box>
  )
}
