import Link from 'next/link'
import { useGetCurrentUser } from '@/hooks/auth'
import { Text } from '@chakra-ui/react'

const Home = () => {
  const { currentUser } = useGetCurrentUser()

  return (
    <>
      {!currentUser ? (
        <>ローディングアイコン</>
      ) : (
        <>
          <p>homeページ</p>
          <Text color={'black'}>あなたのUserId: {currentUser.uid}</Text>
          <Link href="/create" passHref>
            <a href="replace">
              <p>/create</p>
            </a>
          </Link>
          <Link href="/user" passHref>
            <a href="replace">
              <p>/user</p>
            </a>
          </Link>
          <Link href="/id" passHref>
            <a href="replace">
              <p>/[id]</p>
            </a>
          </Link>
        </>
      )}
    </>
  )
}

export default Home
