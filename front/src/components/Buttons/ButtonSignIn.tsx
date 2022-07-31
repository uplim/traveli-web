import { forwardRef, Image, Text } from '@chakra-ui/react'
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { Button } from '@/components/Buttons'

type ButtonIconRoundProps = {
  iconType: 'google' | 'anonymous'
}

export const ButtonSignIn = forwardRef<
  ChakraButtonProps & ButtonIconRoundProps,
  'button'
>(({ iconType, ...props }, ref) => {
  return (
    <Button
      {...props}
      w={'100%'}
      pr={0}
      pl={0}
      _disabled={{
        opacity: '.7'
      }}
      h={'4.6rem'}
      bgColor={'white'}
      borderRadius={'10rem'}
      ref={ref}
      boxShadow={'0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)'}
      filter={'drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))'}
      alignItems={'center'}
      justifyContent={iconType === 'google' ? 'left' : 'center'}
    >
      {iconType === 'google' && (
        <>
          <Image
            src={'/images/icons/google.svg'}
            alt={''}
            w={'1.8rem'}
            h={'1.8rem'}
            ml={'2.1rem'}
          />
          <Text fontSize={'sm'} ml={'6.3rem'}>
            Googleでサインイン
          </Text>
        </>
      )}
      {iconType === 'anonymous' && (
        <Text textAlign={'left'} fontSize={'sm'}>
          登録せずにはじめる
        </Text>
      )}
    </Button>
  )
})
