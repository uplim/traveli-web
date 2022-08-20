import NextLink from 'next/link'
import {
  Avatar,
  Button,
  FormControl,
  Input,
  FormLabel,
  Box,
  Flex,
  Spacer,
  VisuallyHiddenInput,
  IconButton,
  FormErrorMessage,
  Spinner
} from '@chakra-ui/react'
import { IconReturn } from '@/components/Icons'
import { useFormCreateUpdateUser } from '@/hooks/form'
import { UserType } from '@/types/db'

type FormUserProfileProps = {
  data: UserType
}

export const FormUserProfile = ({ data }: FormUserProfileProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    disabled,
    handleUploadFile,
    isFirst,
    currentIcon,
    isUploading
  } = useFormCreateUpdateUser(data)

  return (
    <>
      <Box as={'form'} height={'100vh'} position={'relative'}>
        <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
          {!isFirst && (
            <NextLink href={'/home'} passHref>
              <IconButton
                aria-label={'return'}
                size={'lg'}
                icon={<IconReturn w={'2.2rem'} h={'2.2rem'} />}
              />
            </NextLink>
          )}
          <Spacer />
          <Box color={'black'} fontSize={'md'} fontWeight={'bold'}>
            プロフィール
          </Box>
          <Spacer />
          <Box w={'2.2rem'} h={'2.2rem'} />
        </Flex>

        <Flex align={'center'} justify={'center'}>
          <Box
            borderRadius={'50%'}
            filter={'drop-shadow(4px 4px 10px #E4EBEE);'}
            marginBottom={'2.4rem'}
            bgColor={'base'}
          >
            {isUploading ? (
              <Flex
                w={'12.9rem'}
                h={'12.9rem'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                bg={'gray'}
                rounded={'full'}
              >
                <Spinner
                  thickness={'.4rem'}
                  speed={'.65s'}
                  emptyColor={'gray'}
                  color={'brandBlue'}
                  w={'6.4rem'}
                  h={'6.4rem'}
                />
              </Flex>
            ) : (
              <Avatar
                as={'label'}
                w={'12.9rem'}
                h={'12.9rem'}
                defaultValue={data.icon ?? ''}
                src={currentIcon}
              >
                <VisuallyHiddenInput
                  onChange={handleUploadFile}
                  id={'icon'}
                  type={'file'}
                  accept={'image/*'}
                />
                <VisuallyHiddenInput {...register('icon')} />
              </Avatar>
            )}
          </Box>
        </Flex>

        <FormControl isInvalid={errors.name ? true : false}>
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
              {...register('name')}
            />
          </Flex>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

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
