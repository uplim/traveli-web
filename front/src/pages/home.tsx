import { Box, Flex, Heading, Spacer, Avatar } from '@chakra-ui/react'
import { useGetTravelinkList, useGetOwnerProfile } from '@/hooks/firestore'
import { ButtonIconRound } from '@/components/Buttons'
import { useGetBookmark } from '@/hooks/firestore'
import { CardHome } from '@/components/Cards'

const Home = () => {
  const { travelinkList } = useGetTravelinkList()
  const { ownerProfile } = useGetOwnerProfile()
  const { bookmark, bookmarkExists } = useGetBookmark()

  return (
    <>
      {!ownerProfile || (bookmarkExists && !bookmark) ? (
        <>ローディングアイコン</>
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
            <Avatar
              w={'4rem'}
              h={'4rem'}
              src={ownerProfile ? ownerProfile.icon : ''}
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
          <Flex
            paddingTop={'1.6rem'}
            paddingBottom={'1.6rem'}
            alignItems={'baseline'}
          >
            <Box paddingRight={'0.8rem'} fontSize={'2xl'} fontWeight={'bold'}>
              00
            </Box>
            <Box
              w={'1.8rem'}
              h={'1.8rem'}
              borderRadius={'50%'}
              textAlign={'center'}
              bgColor={'white'}
              fontSize={'xs'}
            >
              土
            </Box>
            <Box paddingLeft={'0.8rem'} fontSize={'sm'}>
              2022/05
            </Box>
          </Flex>
          {/* TODO:shadowの色を変数に置き換える */}
          {travelinkList.map((travelink) => (
            <CardHome data={travelink} key={travelink.id} />
          ))}
          <Heading paddingRight={'0.8rem'} fontSize={'2xl'} fontWeight={'bold'}>
            保存済みリンク
          </Heading>
          {bookmark.items.map((item) => (
            <CardHome data={item} key={item.id} />
          ))}
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
        </>
      )}
    </>
  )
}

export default Home
