import React from 'react'
import {
  Input,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Switch,
  Flex,
  Spacer,
  VisuallyHiddenInput
} from '@chakra-ui/react'
import { useFormCreateUpdateLinks } from '@/hooks/form'
import { useInputImage } from '@/hooks/input'
import { TravelinkRequestType, UserType } from '@/types/db'
import { InputDate } from '@/components/Inputs/InputDate'
import { IconCamera, IconReturn } from '@/components/Icons'
import { CardEditWrapper } from '@/components/Cards'
import { Button } from '@/components/Buttons'

type FormCreateUpdateLinksProps = {
  travelinkData?: TravelinkRequestType
  userData?: UserType
  isOwner?: boolean
}

export const FormCreateUpdateLinks = ({
  travelinkData,
  userData,
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
    handleChangeImage,
    setCategories,
    categories
  } = useFormCreateUpdateLinks(travelinkData, userData)
  const { inputRef, onClickImage } = useInputImage()

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
        <FormLabel marginTop={'1.5rem'} fontSize={'sm'} color={'#2D2D2D'}>
          旅の名前
        </FormLabel>
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
        <FormLabel marginTop={'1.6rem'} fontSize={'sm'} color={'#2D2D2D'}>
          日時（任意）
        </FormLabel>

        {/* TODO:InputDateの見た目変える */}
        <InputDate control={control} name={'date'} />
      </FormControl>

      <FormControl>
        <FormLabel marginTop={'1.6rem'} fontSize={'sm'} color={'#2D2D2D'}>
          サムネイル画像（任意）
        </FormLabel>
        <VisuallyHiddenInput
          ref={inputRef}
          type={'file'}
          accept="image/*"
          onChange={handleChangeImage}
        />
        <Box
          marginTop={'0.8rem'}
          bgImage={
            image ? URL.createObjectURL(image) : travelinkData?.thumbnail
          }
          onClick={onClickImage}
          w={'100%'}
          h={'12.9rem'}
          borderRadius={'1rem'}
          bgColor={'#D2D6E1'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <Flex h={'12.9rem'} align={'center'} justify={'center'}>
            <IconCamera zIndex={1} w={'4.8rem'} h={'4.8rem'} color={'white'} />
          </Flex>
        </Box>
      </FormControl>

      <Box margin={'1.6rem 0 0.8rem 0'}>リンク</Box>

      <FormControl>
        {fields.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <CardEditWrapper
                categories={categories}
                setCategories={setCategories}
                label={item.label}
                url={item.url}
                index={index}
                register={register}
                errors={errors.links}
                remove={() => {
                  remove(index)
                }}
              />
            </React.Fragment>
          )
        })}

        <Flex
          align={'center'}
          justify={'center'}
          marginTop={'1.6rem'}
          color={'brandBlue'}
        >
          <Box bgImage={'/images/plus.svg'} w={'2.4rem'} h={'2.4rem'} />
          <Box
            as={'button'}
            fontSize={'md'}
            type="button"
            onClick={() => {
              // onChangeでsetStateしているので、初期値はこの段階で入れる
              setCategories((categories) => [...categories, 'その他'])
              append({ url: '', label: '' })
            }}
          >
            リストの追加
          </Box>
        </Flex>
        {(isOwner || !travelinkData) && (
          <FormControl
            display={'flex'}
            alignItems={'center'}
            paddingTop={'3rem'}
          >
            <Switch
              sx={{
                '--switch-track-width': '3.8rem',
                '--switch-track-height': '2rem'
              }}
              backgroundColor={'#e3e4e5'}
              borderRadius={'full'}
              marginRight={'2.2rem'}
              colorScheme={'brandBlue-switch'}
              {...register('canEdit')}
              defaultChecked={travelinkData?.canEdit}
            />
            <FormLabel>他のユーザに編集を許可する</FormLabel>
          </FormControl>
        )}
      </FormControl>

      <Flex justify={'center'} margin={'3rem 0 3.5rem 0'}>
        <Button
          disabled={disabled}
          variant={'round'}
          onClick={handleSubmit(onSubmit)}
        >
          {!travelinkData ? '作成する' : '変更する'}
        </Button>
      </Flex>
    </Box>
  )
}
