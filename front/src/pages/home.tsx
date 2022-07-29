import NextLink from 'next/link'
import { Box, Flex, Spacer, Link } from '@chakra-ui/react'
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
  const { user } = useGetUser()

  return (
    <>
      {!user || !travelinkList || !bookmarkList ? (
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

          {/* TODO:shadowの色を変数に置き換える */}
          {/* TODO: date-pickerのstartでええ感じにsortする */}

          <Box
            marginTop={'2.2rem'}
            filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
            w={'100%'}
            h={'11.4rem'}
            borderRadius={'1rem'}
            bgColor={'white'}
          >
            banner
          </Box>

          <TabHome data={travelinkList} bookmarkData={bookmarkList} />
          <NextLink href={'/create'} passHref>
            <Link>
              <ButtonIconRound
                iconType={'plus'}
                position={'fixed'}
                top={'calc(100vh - 6.4rem - 4.8rem)'}
                right={'1.6rem'}
                w={'6.4rem'}
                h={'6.4rem'}
                boxShadow={'0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)'}
                filter={'drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))'}
              />
            </Link>
          </NextLink>
        </>
      )}
    </>
  )
}

export default Home
