import { Box, Flex, Text } from '@chakra-ui/react'

type TextEmptyProps = {
  msgTop: string
  msgBottom: string
}

export const TextEmpty = ({ msgTop, msgBottom }: TextEmptyProps ) => {
  return (
    <Box w={'100%'} >
      <Flex justify={'center'}>
        <Box
          w={'5.6rem'}
          h={'5.6rem'}
          bgImage={'images/icons/other.svg'}
          mb={'4.8rem'}
        />
      </Flex>
      <Flex justify={'center'}>
        <Text mb={'2.2rem'} fontSize={'sm'} color={' #7E7E7E'} >
          {msgTop}
        </Text>
      </Flex>
      <Flex justify={'center'}>
        <Text  w={'23.6rem'} textAlign={'center'} fontSize={'sm'} color={' #7E7E7E'}>{msgBottom}</Text>
      </Flex>
    </Box>
  )
}
