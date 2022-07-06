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
      <FormControl>
        <FormLabel>旅の名前</FormLabel>
        <Input placeholder={'例）ともだちとの一泊二日の旅行'} />
        <FormLabel>日時（任意）</FormLabel>
        <Input placeholder={'0000/00/00-0000/00/00'} />
      </FormControl>
      <FormControl>
        <List>
          {fields.map((item, index) => {
            return (
              <ListItem key={item.id}>
                <FormLabel>URL</FormLabel>
                <Input
                  isInvalid={!!errors.links?.[index].url?.message}
                  {...register(`links.${index}.url`)}
                />
                <FormErrorMessage>
                  {errors.links?.[index] && errors.links?.[index].url?.message}
                </FormErrorMessage>
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
