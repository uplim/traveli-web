import Link from 'next/link'
import { useSignInAnonymously } from '@/hooks/auth'
import { Button } from '@chakra-ui/react'

const Index = () => {
  const { onSubmit, disabled } = useSignInAnonymously()

  return (
    <>
      <p>indexページ</p>
      <Link href="/signin" passHref>
        <a href="replace">
          <p>/signin</p>
        </a>
      </Link>
      <Link href="/signup" passHref>
        <a href="replace">
          <p>/signup</p>
        </a>
      </Link>
      <Button
        bgColor={'brandBlue'}
        disabled={disabled}
        onClick={() => onSubmit()}
      >
        匿名で使い始める
      </Button>
    </>
  )
}

export default Index
