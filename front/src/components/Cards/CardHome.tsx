import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Avatar, Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react'
import { BookmarkType, TravelinkRequestType } from '@/types/db'
import { format } from 'date-fns'
import { IconLink } from '@/components/Icons'
import { Button } from '@/components/Buttons'

type CardHomeProps = {
  data: BookmarkType | TravelinkRequestType
}

export const CardHome = ({ data }: CardHomeProps) => {
  const router = useRouter()

  return (
    <NextLink href={router.basePath + data.id} key={data.id} passHref>
      <Link
        display={'block'}
        w={'100%'}
        h={'23.9rem'}
        borderRadius={'10'}
        filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        bgColor={'white'}
        marginTop={'2.2rem'}
      >
        <Box
          bgImage={data.thumbnail}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          bgPosition={'center center'}
          w={'100%'}
          h={'12.9rem'}
          borderTopRadius={'10'}
        />
        <Box
          paddingTop={'1.1rem'}
          paddingLeft={'1.8rem'}
          paddingRight={'1.8rem'}
          borderBottomRadius={'10'}
        >
          {data.date[0] && (
            <Box fontSize={'xs'} color={'gray'}>
              {data.date[0] && format(data.date[0].toDate(), 'yyyy/MM/dd')}~
              {data.date[1] && format(data.date[1].toDate(), 'yyyy/MM/dd')}
            </Box>
          )}
          <Box>
            <Heading
              paddingTop={'0.6rem'}
              paddingBottom={'1.4rem'}
              fontSize={'lg'}
            >
              {data.title}
            </Heading>
          </Box>
          <Flex alignContent={'baseline'}>
            <Flex>
              <Avatar w={'2.4rem'} h={'2.4rem'} src={data.ownerIcon} />

              <Box paddingLeft={'1rem'} fontSize={'md'}>
                {data.ownerName}
              </Box>
            </Flex>

            <Spacer />
            <Button>
              <IconLink w={'2rem'} h={'2rem'} color={'gray'} />
            </Button>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  )
}
