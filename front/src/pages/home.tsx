import Link from 'next/link'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import {
  useGetTravelinkList,
  useGetUser,
  useGetBookmarkList
} from '@/hooks/firestore'
import { ButtonIconRound } from '@/components/Buttons'
import { Sidebar } from '@/components/Sidebars'
import { TabHome } from '@/components/Tabs'
import { Loading } from '@/components/Loadings'

const Home = () => {
  const { travelinkList } = useGetTravelinkList()
  const { bookmarkList } = useGetBookmarkList()
  const { user, currentUser } = useGetUser()

  return (
    <>
      {!user || !travelinkList || !bookmarkList || !currentUser ? (
        <Loading />
      ) : (
        <>
          <Flex marginTop={'1.2rem'}>
            <Box w={'4rem'} />
            <Spacer />
            <Flex
              bgImage={'/images/traveli.svg'}
              marginTop={'1rem'}
              w={'7.7rem'}
              h={'1.8rem'}
            />
            <Spacer />

            <Sidebar
              icon={user.icon ? user.icon : ''}
              name={user.name ? user.name : ''}
            />
          </Flex>

          <Box
            marginTop={'2.2rem'}
            w={'100%'}
            h={'11.4rem'}
            borderRadius={'1rem'}
            bgImage={'/images/banner.png'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            bgPosition={'center center'}
            boxShadow={'0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)'}
            filter={'drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))'}
          />

          <TabHome data={travelinkList} bookmarkData={bookmarkList} />
          <Link href={'/create'} passHref>
            <ButtonIconRound
              as={'a'}
              iconType={'plus'}
              position={'fixed'}
              top={'calc(100vh - 6.4rem - 4.8rem)'}
              right={'1.6rem'}
              w={'6.4rem'}
              h={'6.4rem'}
            />
          </Link>
        </>
      )}
    </>
  )
}

export default Home
