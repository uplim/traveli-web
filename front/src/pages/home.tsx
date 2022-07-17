import { Box, Flex, Heading, Spacer, Avatar } from '@chakra-ui/react'
import Link from 'next/link'
import { IconLink } from '@/components/Icons'
import { useGetTravelinkList, useGetOwnerProfile } from '@/hooks/firestore'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { travelinkList } = useGetTravelinkList()
  const { ownerProfile } = useGetOwnerProfile()

  return (
    <>
      {!ownerProfile ? (
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
            filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
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
          {travelinkList.map((travelink, i) => (
            <Link href={router.basePath + travelink.id} key={i} passHref>
              {/* <a href="replace"> */}
              <Box
                w={'100%'}
                h={'23.9rem'}
                borderRadius={'10'}
                filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
                bgColor={'white'}
                marginBottom={'2.2rem'}
              >
                <Box
                  bgImage={travelink.thumbnail}
                  h={'12.9rem'}
                  borderTopRadius={'10'}
                />
                <Box
                  paddingTop={'1.1rem'}
                  paddingLeft={'1.8rem'}
                  paddingRight={'1.8rem'}
                  borderBottomRadius={'10'}
                >
                  <Box fontSize={'xs'} color={'gray'}>
                    {/* TODO: date-pickerのstartとendで表示する */}
                    {travelink.date}~0000/00/00
                  </Box>
                  <Box>
                    <Heading
                      paddingTop={'0.6rem'}
                      paddingBottom={'1.4rem'}
                      fontSize={'lg'}
                    >
                      {travelink.title}
                    </Heading>
                  </Box>
                  <Flex alignContent={'baseline'}>
                    <Flex>
                      <Avatar
                        w={'2.4rem'}
                        h={'2.4rem'}
                        src={travelink.ownerIcon}
                      />

                      <Box paddingLeft={'1rem'} fontSize={'md'}>
                        {travelink.ownerName}
                      </Box>
                    </Flex>

                    <Spacer />
                    <Link href={router.basePath + '/user'} passHref>
                      <IconLink w={'2rem'} h={'2rem'} color={'gray'} />
                    </Link>
                  </Flex>
                </Box>
              </Box>
              {/* </a> */}
            </Link>
          ))}
        </>
      )}
    </>
  )
}

export default Home