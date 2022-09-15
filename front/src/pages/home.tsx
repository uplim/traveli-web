import Link from 'next/link'
import { Avatar, Box, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
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
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {!user || !currentUser ? (
        <Loading />
      ) : (
        <>
          <Sidebar
            isOpen={isOpen}
            onClose={onClose}
            icon={user.icon ? user.icon : ''}
            name={user.name ? user.name : ''}
          />
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
            <Avatar
              w={'4rem'}
              h={'4rem'}
              src={user.icon ? user.icon : ''}
              onClick={onOpen}
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
          <Box position={'fixed'} bottom={0}>
            <Link href={'/create'} passHref>
              <ButtonIconRound
                as={'a'}
                iconType={'plus'}
                position={'fixed'}
                bottom={'5rem'}
                right={'1.9rem'}
                w={'6.4rem'}
                h={'6.4rem'}
              />
            </Link>
          </Box>
        </>
      )}
    </>
  )
}

export default Home
