import NextLink from 'next/link'
import { Avatar, Box, Flex, Heading, Link } from '@chakra-ui/react'
import { BookmarkType, TravelinkRequestType } from '@/types/db'
import { format } from 'date-fns'
import { Button } from '@/components/Buttons'

type CardHomeProps = {
  data: BookmarkType | TravelinkRequestType
}

export const CardHome = ({ data }: CardHomeProps) => {
  return (
    <NextLink href={`/${data.id}`} key={data.id} passHref>
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
          bgImage={data.thumbnail ? data.thumbnail : ''}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          bgPosition={'center center'}
          w={'100%'}
          h={'12.9rem'}
          borderTopRadius={'10'}
        />

        <Flex justify={'space-between'}>
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
            </Flex>
          </Box>
          <Button mt={'1.6rem'}>
            <Flex w={'3.6rem'} h={'3.6rem'} align={'center'} justify={'center'}>
              <Box
                bgImage={'/images/icons/homeMenu.svg'}
                w={'2.4rem'}
                h={'2.4rem'}
              />
            </Flex>
          </Button>
        </Flex>
      </Link>
    </NextLink>
  )
}
