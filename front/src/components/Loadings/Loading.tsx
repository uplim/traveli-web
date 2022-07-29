import { Flex, Spinner } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
      h={'100vh'}
      w={'100%'}
    >
      <Spinner
        thickness={'.4rem'}
        speed={'.65s'}
        emptyColor={'gray'}
        color={'brandBlue'}
        w={'6.4rem'}
        h={'6.4rem'}
      />
    </Flex>
  )
}
