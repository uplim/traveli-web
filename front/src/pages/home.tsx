import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { IconCamera, IconHelp, IconMenu } from '@/components/Icons'

const Home = () => {
  const currentUser = useRecoilValue(currentUserState)

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
          <IconCamera w={'2rem'} h={'2rem'} color={'black'} />
          <IconMenu w={'3rem'} h={'3rem'} color={'red'} />
          <IconHelp w={'5rem'} h={'5rem'} color={'green'} />
        </>
      )}
    </>
  )
}

export default Home
