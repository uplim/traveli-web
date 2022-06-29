import {
  Input,
  Box,
  FormControl,
  FormLabel,
  List,
  ListItem
} from '@chakra-ui/react'
import { useForm, useFieldArray } from 'react-hook-form'

export const FormCreateLinks = () => {
  const { register, control, handleSubmit } = useForm()

  const { fields, append } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = () => {
    return {}
  }

  return (
    <Box>
      <FormControl>
        <FormLabel>旅の名前</FormLabel>
        <Input placeholder={'例）ともだちとの一泊二日の旅行'} />
        <FormLabel>日時（任意）</FormLabel>
        <Input placeholder={'0000/00/00-0000/00/00'} />
      </FormControl>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <List>
          {fields.map((item, index) => {
            return (
              <ListItem key={item.id}>
                <FormLabel>URL</FormLabel>
                <Input {...register(`links[${index}].url`)} />
                <FormLabel>ラベル</FormLabel>
                <Input {...register(`links[${index}].label`)} />
              </ListItem>
            )
          })}
        </List>
        <button
          type="button"
          onClick={() => {
            append({ links: { url: '', label: '' } })
          }}
        >
          append
        </button>
        <Input type="submit" />
      </FormControl>
    </Box>
  )
}
