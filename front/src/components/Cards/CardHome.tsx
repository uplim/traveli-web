import Link from 'next/link'
import { useRouter } from 'next/router'
import { Avatar, Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { BookmarkType, TravelinkRequestType } from '@/types/db'
import { format } from 'date-fns'
import { IconLink } from '@/components/Icons'

type CardHomeProps = {
  data: BookmarkType | TravelinkRequestType
}

export const CardHome = ({ data }: CardHomeProps) => {
  const router = useRouter()

  return (
    <Link href={router.basePath + data.id} key={data.id} passHref>
      <Box
        as={'a'}
        display={'block'}
        w={'100%'}
        h={'23.9rem'}
        borderRadius={'10'}
        filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        bgColor={'white'}
        marginTop={'2.2rem'}
      >
        <Box bgImage={data.thumbnail} h={'12.9rem'} borderTopRadius={'10'} />
        <Box
          paddingTop={'1.1rem'}
          paddingLeft={'1.8rem'}
          paddingRight={'1.8rem'}
          borderBottomRadius={'10'}
        >
          {data.date[0] && (
            <Box fontSize={'xs'} color={'gray'}>
              {/* TODO: date-pickerのstartとendで表示する */}
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
            <Link href={router.basePath + '/user'} passHref>
              <IconLink w={'2rem'} h={'2rem'} color={'gray'} />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Link>
  )
}
