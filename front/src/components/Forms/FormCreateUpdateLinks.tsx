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
  Flex,
  Spacer,
  VisuallyHiddenInput
} from '@chakra-ui/react'

import { useRef } from 'react'
import { useFormCreateUpdateLinks } from '@/hooks/form'
import { TravelinkRequestType, Profile } from '@/types/db'

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
    onSubmit,
    errors,
    disabled,
    image,
    handleChangeImage
  } = useFormCreateUpdateLinks(formType, travelinkData, ownerProfile)

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickButton = () => {
    inputRef.current?.click()
  }

  return (
    <Box>
      <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
        <IconReturn w={'2.2rem'} h={'2.2rem'} />
        <Spacer />
        <Box color={'black'} fontSize={'md'} fontWeight={'bold'}>
          新しいトラベリンクを作成
        </Box>
        <Spacer />
        <Box w={'2.2rem'} h={'2.2rem'} />
      </Flex>

      <FormControl isInvalid={errors.title ? true : false}>
        <FormLabel>旅の名前</FormLabel>
        <Input
          variant={'filled'}
          w={'34.4rem'}
          h={'4.6rem'}
          borderRightRadius={'10rem'}
          borderLeftRadius={'10rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
          {...register('title')}
          placeholder={'例）ともだちとの一泊二日の旅行'}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.date ? true : false}>
        <FormLabel>日時（任意）</FormLabel>
        <Input
          variant={'filled'}
          w={'34.4rem'}
          h={'4.6rem'}
          borderRightRadius={'10rem'}
          borderLeftRadius={'10rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE);'}
          {...register('title')}
          placeholder={'2022/01/23 ~ 2022/01/25'}
          {...register('date')}
        />
        <FormErrorMessage>
          {errors.date && errors.date.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>サムネイル画像（任意）</FormLabel>
        <VisuallyHiddenInput
          ref={inputRef}
          type={'file'}
          accept="image/*"
          onChange={handleChangeImage}
        />
        <Image
          alt={''}
          src={image ? URL.createObjectURL(image) : ''}
          onClick={onClickButton}
          w={'100%'}
          h={'12.9rem'}
          borderRadius={'1rem'}
          bgColor={'gray'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
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
