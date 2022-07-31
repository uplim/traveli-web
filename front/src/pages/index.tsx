import { useSignInAnonymously } from '@/hooks/auth'
import { Flex, Image, Box, Text } from '@chakra-ui/react'
import { useSignInGoogle } from '@/hooks/auth/useSignInGoogle'
import { Layout } from '@/components/Layout'
import { ButtonSignIn } from '@/components/Buttons'
import { useLoadImage } from '@/hooks/load'
import { Loading } from '@/components/Loadings'

const Index = () => {
  const { signInAnonymouslyHandler, disabled: anonymouslyDisabled } =
    useSignInAnonymously()
  const { signInGoogleHandler, disabled: googleDisabled } = useSignInGoogle()
  const { isLoad } = useLoadImage('/images/smartphone.png')

  return (
    <Layout>
      {!isLoad ? (
        <Loading />
      ) : (
        <>
          <Flex mt={'7.7rem'} alignItems={'center'} justifyContent={'center'}>
            <Image src={'/images/top.svg'} alt={''} />
          </Flex>
          <Box mt={'4.3rem'} textAlign={'right'}>
            <Image src={'/images/text.svg'} alt={''} display={'inline'} />
          </Box>
          <Box mt={'-3rem'} textAlign={'center'}>
            <Image
              src={'/images/smartphone.png'}
              alt={''}
              w={'100%'}
              h={'100%'}
            />
          </Box>
          <Text
            mt={'2.7rem'}
            textAlign={'center'}
            lineHeight={'1.92rem'}
            fontSize={'md'}
          >
            traveliは、旅先で必要なURLをまとめて、
            <br /> 管理・共有できるwebサービスです。
          </Text>

          <ButtonSignIn
            disabled={googleDisabled}
            mt={'2.1rem'}
            iconType={'google'}
            onClick={() => {
              signInGoogleHandler()
            }}
          />
          <ButtonSignIn
            disabled={anonymouslyDisabled}
            mt={'2.1rem'}
            iconType={'anonymous'}
            onClick={() => {
              signInAnonymouslyHandler()
            }}
          />
        </>
      )}
    </Layout>
  )
}

export default Index
