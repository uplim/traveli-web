import { Box, Image, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { IconLink } from './../components/Icons'
import dummyImg from '../public/images/dummy.png'
import traveli from '../public/images/traveli.svg'

const Home = () => {
  const currentUser = useRecoilValue(currentUserState)

  return (
    <>
      {!currentUser ? (
        <>ローディングアイコン</>
      ) : (
        <>
          <Flex marginTop={'1.2rem'}>
            <Box w={'4rem'}></Box>
            <Spacer />
            <Flex
              bgImage={traveli.src}
              marginTop={'1rem'}
              w={'7.7rem'}
              h={'1.8rem'}
            ></Flex>
            <Spacer />
            <Box
              w={'4rem'}
              h={'4rem'}
              borderRadius={'50%'}
              bgColor={'gray'}
            ></Box>
          </Flex>
          
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
          <Box
            w={'100%'}
            h={'23.9rem'}
            borderRadius={'10'}
            {/* TODO:shadowの色を変数に置き換える */}
            filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
            bgColor={'white'}
          >
            <Box
              bgImage={dummyImg.src}
              h={'12.9rem'}
              borderTopRadius={'10'}
              bgColor={'gray'}
            />
            <Box
              paddingTop={'1.1rem'}
              paddingLeft={'1.8rem'}
              paddingRight={'1.8rem'}
              borderBottomRadius={'10'}
            >
              <Box fontSize={'xs'} color={'gray'}>
                0000/00/00~0000/00/00
              </Box>
              <Box>
                <Heading
                  paddingTop={'0.6rem'}
                  paddingBottom={'1.4rem'}
                  fontSize={'lg'}
                >
                  いつメンで東京旅行
                </Heading>
              </Box>
              <Flex alignContent={'baseline'}>
                <Flex>
                  <Box
                    w={'2.4rem'}
                    h={'2.4rem'}
                    borderRadius={'50%'}
                    bgColor={'gray'}
                  ></Box>
                  <Box paddingLeft={'1rem'} fontSize={'md'}>
                    Piyo
                  </Box>
                </Flex>

                <Spacer />
                <IconLink w={'2rem'} h={'2rem'} color={'gray'} />
              </Flex>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

export default Home
