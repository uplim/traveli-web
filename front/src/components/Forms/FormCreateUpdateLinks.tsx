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
import { InputDate } from '@/components/Inputs/InputDate'
import { IconCamera, IconPlus, IconReturn } from '@/components/Icons'
import { CardLink } from '@/components/Cards'
import { colors } from '@/theme/colors'

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
        <FormLabel marginTop={'1.5rem'}>旅の名前</FormLabel>
        <Input
          variant={'filled'}
          h={'4.6rem'}
          marginTop={'0.8rem'}
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
        {/* <Input
          variant={'filled'}
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
        </FormErrorMessage> */}

        {/* TODO:　スタイルどうにかする */}
        <InputDate control={control} name={'date'} />
      </FormControl>

      <FormControl>
        <FormLabel marginTop={'1.6rem'}>サムネイル画像（任意）</FormLabel>
        <VisuallyHiddenInput
          ref={inputRef}
          type={'file'}
          accept="image/*"
          onChange={handleChangeImage}
        />
        <Box
          marginTop={'0.8rem'}
          bgImage={image ? URL.createObjectURL(image) : ''}
          onClick={onClickButton}
          w={'100%'}
          h={'12.9rem'}
          borderRadius={'1rem'}
          bgColor={'gray'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <Flex align={'center'} justify={'center'}>
            <IconCamera zIndex={1} w={'4.8rem'} h={'4.8rem'} color={'white'} />
          </Flex>
        </Box>
      </FormControl>

      <Box margin={'1.6rem 0 1.6rem 0'}>リンク</Box>
      <CardLink
        label={'ぷるりく'}
        url={'https://github.com/traveli-dev/traveli-web/pull/96'}
      />
      <CardLink
        label={'ぷるりく'}
        url={'https://github.com/traveli-dev/traveli-web/pull/96'}
      />

      <FormControl>
        <Box
          marginTop={'0.4rem'}
          padding={'2.4rem 1.6rem 2.5rem 1.6rem'}
          w={'100%'}
          h={'20.1rem'}
          borderRadius={'1.5rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <List>
            <FormLabel>URL</FormLabel>
            <Input
              margin={'0.8rem 0 1.6rem 0'}
              variant={'outline'}
              color={'#ACC1CA'}
              h={'4.4rem'}
              borderRightRadius={'10rem'}
              borderLeftRadius={'10rem'}
            />
            <FormLabel>ラベル</FormLabel>
            <Input
              marginTop={'0.8rem'}
              variant={'outline'}
              color={'#ACC1CA'}
              h={'4.4rem'}
              borderRightRadius={'10rem'}
              borderLeftRadius={'10rem'}
            />

            {fields.map((item, index) => {
              return (
                <ListItem key={item.id}>
                  <FormControl isInvalid={!!errors.links}>
                    <FormLabel>URL</FormLabel>
                    <Input
                      margin={'0.8rem 0 1.6rem 0'}
                      variant={'outline'}
                      color={'#ACC1CA'}
                      w={'31.1rem'}
                      h={'4.4rem'}
                      borderRightRadius={'10rem'}
                      borderLeftRadius={'10rem'}
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
                    marginTop={'0.8rem'}
                    variant={'outline'}
                    color={'#ACC1CA'}
                    w={'31.1rem'}
                    h={'4.4rem'}
                    borderRightRadius={'10rem'}
                    borderLeftRadius={'10rem'}
                    {...register(`links.${index}.label`)}
                    defaultValue={item.label}
                  />
                </ListItem>
              )
            })}
          </List>
        </Box>
        {/* Add List */}
        <Flex
          align={'center'}
          justify={'center'}
          marginTop={'1.6rem'}
          color={'brandBlue'}
        >
          <Box fontSize={'md'}> + リストの追加</Box>
        </Flex>
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
          <FormControl
            display={'flex'}
            alignItems={'center'}
            paddingTop={'3rem'}
          >
            <Switch
              paddingRight={'2.2rem'}
              size={'lg'}
              color={'brandBlue'}
              {...register('canEdit')}
              defaultChecked={travelinkData?.canEdit}
            />
            <FormLabel>他のユーザに編集を許可する</FormLabel>
          </FormControl>
        )}
      </FormControl>

      <Button
        marginTop={'3rem'}
        disabled={disabled}
        variant={'round'}
        onClick={handleSubmit(onSubmit)}
      >
        作成する
      </Button>
    </Box>
  )
}
