import { Image, Text, Flex, Box, Spacer } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const router = useRouter()
  return (
    <>
      <Flex marginTop={'1.2rem'}>
        <Spacer />
        <Flex
          bgImage={'/images/traveli.svg'}
          marginTop={'1rem'}
          w={'7.7rem'}
          h={'1.8rem'}
        />
        <Spacer />
      </Flex>
      <Box margin={'10.8rem auto 4.8rem auto'} w={'90%'}>
        <Image
          src={'/images/person_bowing.svg'}
          alt={'🙇'}
          w={'6.4rem'}
          margin={'0 auto'}
        />
        <Text
          color={'brandBlue'}
          fontWeight={'extrabold'}
          fontSize={'2.4rem'}
          margin={'1.6rem 0 4.8rem 0'}
          textAlign={'center'}
        >
          404 Not Found
        </Text>

        <Text
          color={'gray'}
          fontWeight={'medium'}
          fontSize={'1.5rem'}
          textAlign={'center'}
        >
          お探しのページが見つかりませんでした
          <br />
          お手数をおかけしますが、
          <br />
          traveliのホームより、
          <br />
          再度おさがしいただきますよう
          <br />
          お願いいたします。
        </Text>
      </Box>
      <Button
        position={'absolute'}
        right={'50%'}
        transform={'translateX(50%)'}
        variant={'round'}
        padding={'0 6rem'}
        w={'16.8rem'}
        onClick={() => router.push('/home')}
      >
        ホームへもどる
      </Button>
    </>
  )
}

export default Custom404
