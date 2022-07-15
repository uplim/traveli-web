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
import { useFormUpdateLinks } from '@/hooks/form'
import { TravelinkRequestType } from '@/types/db'

export const FormUpdateLinks = ({
  data
}: Record<'data', TravelinkRequestType>) => {
  const {
    register,
    handleSubmit,
    fields,
    append,
    remove,
    onSubmit,
    errors,
    disabled,
    image,
    handleChangeImage
  } = useFormUpdateLinks(data)

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
        <Input placeholder={'2022/01/23 ~ 2022/01/25'} {...register('date')} />
        <FormErrorMessage>
          {errors.date && errors.date.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>サムネイル画像（任意）</FormLabel>
        <Input type={'file'} accept="image/*" onChange={handleChangeImage} />
        <Image
          alt={''}
          src={image ? URL.createObjectURL(image) : data.thumbnail}
        />
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
                    defaultValue={item.url}
                  />
                  <FormErrorMessage>
                    {errors.links?.[index] &&
                      errors.links?.[index].url?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormLabel>ラベル</FormLabel>
                <Input
                  {...register(`links.${index}.label`)}
                  defaultValue={item.label}
                />
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
        <button
          type="button"
          onClick={() => {
            remove(1)
          }}
        >
          remove
        </button>
        <FormControl display={'flex'} alignItems={'center'}>
          <FormLabel>他のユーザに編集を許可する</FormLabel>
          <Switch {...register('canEdit')} defaultChecked={data.canEdit} />
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
