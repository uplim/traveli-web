import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'

type CardLinkProps = {
  icon: string
  label: string
  url: string
}

export const CardLink = ({ label, url }: CardLinkProps) => {
  return (
    <Link href={url}>
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
      >
        {/* TODO: 長文のラベルの最後の文字を...に */}
        {/* TODO: アイコンPropsの受け取り */}
        <Image alt={''} w={'3.7rem'} h={'3.7rem'} position={'absolute'} marginLeft={'0.8rem'} />
        <Box w={'70.8%'} mx={'auto'}>
            <Text textAlign={'center'} fontSize={'md'}>{label}</Text>
        </Box>
      </Flex>
    </Link>
  )
}
