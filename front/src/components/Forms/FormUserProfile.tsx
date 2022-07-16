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
  VisuallyHiddenInput,
  IconButton
} from '@chakra-ui/react'
import Link from 'next/link'
import { IconReturn } from '@/components/Icons'
import { useCreateUpdateUserProfile } from '@/hooks/form'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export const FormUserProfile = () => {
  const router = useRouter()

  const {
    onSubmit,
    handleSubmit,
    register,
    handleChangeIcon,
    error,
    iconUrl,
    name,
    image,
    disabled
  } = useCreateUpdateUserProfile()

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickButton = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <Box as={'form'} height={'100vh'} position={'relative'}>
        {error && <Alert>送信できませんでした</Alert>}
        {/* TODO:FormUserProfileに置き換え */}
        {/* Header */}

        <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
          <Link href={router.basePath + '/home'} passHref>
            {/* TODO:Warningエラー出てる */}
            {/* 原因解決：https://zenn.dev/hiro__dev/scraps/d4b531165ad335 */}

            <IconButton
              aria-label="return"
              size="lg"
              icon={<IconReturn w={'2.2rem'} h={'2.2rem'} />}
            />
          </Link>
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
          disabled={disabled}
          variant={'round'}
          onClick={handleSubmit(onSubmit)}
        >
          決定
        </Button>
      </Box>
    </>
  )
}
