import {
  Alert,
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel,
  Box,
  Flex,
  Spacer,
  VisuallyHiddenInput
} from '@chakra-ui/react'
import { IconReturn } from '@/components/Icons'
import { useCreateUpdateUserProfile } from '@/hooks/form'
import { useRef } from 'react'

export const FormUserProfile = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    handleChangeIcon,
    error,
    iconUrl,
    name,
    image,
    errors
  } = useCreateUpdateUserProfile()

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickButton = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <Box
        as={'form'}
        height={'100vh'}
        onSubmit={handleSubmit(onSubmit)}
        position={'relative'}
      >
        {error && <Alert>送信できませんでした</Alert>}
        {/* TODO:FormUserProfileに置き換え */}
        {/* Header */}

        <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
          <IconReturn w={'2.2rem'} h={'2.2rem'} />
          <Spacer />
          <Box color={'black'} fontSize={'md'} fontWeight={'bold'}>
            プロフィール
          </Box>
          <Spacer />
          <Box w={'2.2rem'} h={'2.2rem'} />
        </Flex>

        <FormControl>
          {/* icon */}
          {/* TODO:firestore関連のエラー  */}
          <Flex align={'center'} justify={'center'}>
            <Box
              borderRadius={'50%'}
              filter={'drop-shadow(4px 4px 10px #E4EBEE);'}
              marginBottom={'2.4rem'}
              bgColor={'base'}
            >
              <Avatar
                src={image ? URL.createObjectURL(image) : iconUrl}
                w={'12.9rem'}
                h={'12.9rem'}
                as={'button'}
                onClick={onClickButton}
              />
            </Box>
          </Flex>

          <VisuallyHiddenInput
            onChange={handleChangeIcon}
            ref={inputRef}
            id="icon"
            type="file"
            accept="image/*"
          />

          {/* name */}
          <FormLabel htmlFor="name" fontSize={'md'}>
            ニックネーム
          </FormLabel>
          <Flex align={'center'} justify={'center'}>
            <Input
              variant={'filled'}
              w={'34.4rem'}
              h={'4.6rem'}
              borderRightRadius={'10rem'}
              borderLeftRadius={'10rem'}
              bgColor={'white'}
              filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
              id="name"
              defaultValue={name}
              {...register('name')}
            />
          </Flex>
        </FormControl>
        {/* SubmitButton */}
        <Button
          position={'absolute'}
          bottom={'12.9rem'}
          right={'50%'}
          transform={'translateX(50%)'}
          type={'submit'}
          variant={'round'}
        >
          決定
        </Button>
      </Box>
    </>
  )
}
