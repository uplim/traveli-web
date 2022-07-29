import { Dispatch, SetStateAction } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

type CardLinkProps = {
  // icon: string
  label: string
  url?: string
  setIsMinimum?: Dispatch<SetStateAction<boolean>>
}

export const CardLink = ({ label, url, setIsMinimum }: CardLinkProps) => {
  const onClick = () => {
    if (url) window.open(url)
    if (setIsMinimum) setIsMinimum(false)
  }

  return (
    <>
      <Flex
        position={'relative'}
        top={0}
        left={0}
        w={'100%'}
        h={'5.2rem'}
        borderRadius={'10rem'}
        bgColor={'white'}
        filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
        align={'center'}
        marginBottom={'1rem'}
        onClick={onClick}
        cursor={'pointer'}
      >
        {/* TODO: アイコンPropsの受け取り */}
        <Box
          backgroundColor={'gray'}
          borderRadius={'100%'}
          w={'3.8rem'}
          h={'3.8rem'}
          marginLeft={'0.7rem'}
        />
        <Text
          w={'80%'}
          textAlign={'center'}
          fontSize={'md'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
          textOverflow={'ellipsis'}
          margin={'0 1.6rem'}
        >
          {label}
        </Text>
      </Flex>
    </>
  )
}
