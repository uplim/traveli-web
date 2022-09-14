import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex
} from '@chakra-ui/react'
import { Box, Text, Image } from '@chakra-ui/react'
import { ButtonSignIn } from '@/components/Buttons'
import { useSignInAnonymously } from '@/hooks/auth'
import { useSignInGoogle } from '@/hooks/auth/useSignInGoogle'

type ModalSignInProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalSignIn = ({ isOpen, onClose }: ModalSignInProps) => {
  const { signInAnonymouslyHandler, disabled: anonymouslyDisabled } =
    useSignInAnonymously()
  const { signInGoogleHandler, disabled: googleDisabled } = useSignInGoogle()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        margin={'auto 0'}
        width={'100vw'}
        maxW={'100vw'}
        borderRadius={'3rem'}
      >
        <ModalCloseButton margin={'1rem'} />
        <ModalBody>
          <Box pt={'4.7rem'} pb={'3.4rem'}>
            <Flex m={'0 auto 2.7rem auto'} w={'13.4rem'}>
              <Image src={'/images/top.svg'} alt={''} />
            </Flex>
            <Flex m={'-3rem auto 0 auto'} w={'34.6rem'}>
              <Image src={'/images/smartphone-mini.png'} alt={''} />
            </Flex>
            <Text textAlign={'center'} lineHeight={'1.92rem'} fontSize={'md'}>
              traveliは、旅先で必要なURLをまとめて、
              <br /> 管理・共有できるwebサービスです。
            </Text>

            <ButtonSignIn
              disabled={googleDisabled}
              bgColor={'brandBlue'}
              text={'Googleでサインイン'}
              color={'white'}
              h={'5.2rem'}
              mt={'2.7rem'}
              iconType={'anonymous'}
              isShadow={false}
              onClick={() => {
                signInGoogleHandler()
              }}
            />
            <ButtonSignIn
              disabled={anonymouslyDisabled}
              color={'brandBlue'}
              border={'.2rem solid'}
              h={'5.2rem'}
              isShadow={false}
              borderColor={'brandBlue'}
              mt={'2.1rem'}
              iconType={'anonymous'}
              onClick={() => {
                signInAnonymouslyHandler()
              }}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
