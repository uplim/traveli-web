import { useSignInAnonymously } from '@/hooks/auth'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useSignInGoogle } from '@/hooks/auth/useSignInGoogle'

const Index = () => {
  const { signInAnonymouslyHandler, disabled: anonymouslyDisabled } =
    useSignInAnonymously()
  const { signInGoogleHandler, disabled: googleDisabled } = useSignInGoogle()

  return (
    <>
      <Text fontWeight="bold">indexページ</Text>
      <Button
        bgColor={'brandBlue'}
        disabled={anonymouslyDisabled}
        onClick={() => signInAnonymouslyHandler()}
      >
        登録せず利用
      </Button>

      <Button
        bgColor={'brandBlue'}
        disabled={googleDisabled}
        onClick={() => signInGoogleHandler()}
      >
        Googleログイン
      </Button>
    </>
  )
}

export default Index
