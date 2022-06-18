import Link from 'next/link'
import { useSignInAnonymously } from '@/hooks/auth'

const Index = () => {
  const signInAnonymously = useSignInAnonymously

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
      <button onClick={() => signInAnonymously()}>ゲストログイン</button>
    </>
  )
}

export default Index
