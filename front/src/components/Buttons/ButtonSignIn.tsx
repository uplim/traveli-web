import { forwardRef, Image, Text, Flex } from '@chakra-ui/react'
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { Button } from '@/components/Buttons'

type ButtonIconRoundProps = {
  iconType: 'google' | 'anonymous'
  bgColor?: 'brandBlue' | 'white'
  text?: string
  h?: string
  isShadow?: boolean
}

export const ButtonSignIn = forwardRef<
  ChakraButtonProps & ButtonIconRoundProps,
  'button'
>(
  (
    {
      iconType,
      bgColor = 'white',
      text,
      h = '4.6rem',
      isShadow = true,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        {...props}
        w={'100%'}
        pr={0}
        pl={0}
        _disabled={{
          opacity: '.7'
        }}
        h={h}
        bgColor={bgColor}
        borderRadius={'10rem'}
        ref={ref}
        boxShadow={
          isShadow ? '0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)' : ''
        }
        filter={
          isShadow ? 'drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))' : ''
        }
        alignItems={'center'}
        justifyContent={iconType === 'google' ? 'left' : 'center'}
      >
        {iconType === 'google' && (
          <Flex position={'relative'} w={'100%'}>
            <Image
              src={'/images/icons/google.svg'}
              alt={''}
              w={'1.8rem'}
              h={'1.8rem'}
              position={'absolute'}
              top={'50%'}
              transform={'translateY(-50%)'}
              left={'2.1rem'}
            />
            <Text
              position={'absolute'}
              fontSize={'sm'}
              top={'50%'}
              left={'50%'}
              transform={'translate(-50%, -50%)'}
            >
              Googleでサインイン
            </Text>
          </Flex>
        )}
        {iconType === 'anonymous' && (
          <Text fontSize={'sm'}>{text ?? '登録せずにはじめる'}</Text>
        )}
      </Button>
    )
  }
)
