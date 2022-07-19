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
  Image,
  UseRadioProps
} from '@chakra-ui/react'
import { useFormCreateUpdateLinks } from '@/hooks/form'
import { TravelinkRequestType, Profile } from '@/types/db'
import { InputDate } from '@/components/Inputs/InputDate'
import { useRadio, useRadioGroup, HStack } from '@chakra-ui/react'

type FormCreateUpdateLinksProps = {
  formType: 'create' | 'update'
  travelinkData?: TravelinkRequestType
  ownerProfile?: Profile
  isOwner?: boolean
}

export const FormCreateUpdateLinks = ({
  formType,
  travelinkData,
  ownerProfile,
  isOwner
}: FormCreateUpdateLinksProps) => {
  const {
    register,
    handleSubmit,
    fields,
    append,
    remove,
    control,
    onSubmit,
    errors,
    disabled,
    image,
    handleChangeImage
  } = useFormCreateUpdateLinks(formType, travelinkData, ownerProfile)

  type RadioCardProps = {
    index: number
    radio: UseRadioProps
    children: React.ReactNode | string
  }

  const RadioCard = ({ index, radio, children }: RadioCardProps) => {
    const { getInputProps, getCheckboxProps } = useRadio(radio)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
      <Box as="label">
        <Input {...input} {...register(`links.${index}.category`)} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="full"
          borderColor="#ACC1CA"
          bg="white"
          _checked={{
            bg: 'brandBlue',
            color: 'white',
            borderColor: 'brandBlue'
          }}
          _focus={{
            boxShadow: 'outline'
          }}
          px={5}
          py={3}
        >
          {children}
        </Box>
      </Box>
    )
  }

  const categoryOptions = ['場所', '食事', 'その他']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: 'その他',
    onChange: console.log
  })

  const group = getRootProps()

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
        <InputDate control={control} name={'date'} />
      </FormControl>
      <FormControl>
        <FormLabel>サムネイル画像（任意）</FormLabel>
        <Input type={'file'} accept="image/*" onChange={handleChangeImage} />
        <Image
          alt={''}
          src={image ? URL.createObjectURL(image) : travelinkData?.thumbnail}
        />
      </FormControl>

      <FormControl>
        <List>
          {fields.map((item, index) => {
            return (
              <ListItem key={item.id}>
                <FormControl isInvalid={!!errors.links}>
                  <FormLabel>カテゴリー</FormLabel>
                  <HStack {...group}>
                    {categoryOptions.map((value, index) => {
                      const radio = getRadioProps({ value })
                      return (
                        <RadioCard key={value} index={index} radio={radio}>
                          {value}
                        </RadioCard>
                      )
                    })}
                  </HStack>
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
        {(isOwner || formType === 'create') && (
          <FormControl display={'flex'} alignItems={'center'}>
            <FormLabel>他のユーザに編集を許可する</FormLabel>
            <Switch
              {...register('canEdit')}
              defaultChecked={travelinkData?.canEdit}
            />
          </FormControl>
        )}
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
