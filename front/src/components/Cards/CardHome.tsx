import { Avatar, Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import { BookmarkType, TravelinkRequestType } from '@/types/db'
import { format } from 'date-fns'
import { ModalDeleteTravelknk } from '@/components/Modals'
import { MenuOpenDeleteTravelink } from '@/components/Menus'

type CardHomeProps = {
  data: BookmarkType | TravelinkRequestType
}

export const CardHome = ({ data }: CardHomeProps) => {
  const {
    isOpen: isOpenDeleteTravelinkModal,
    onOpen: onOpenDeleteTravelinkModal,
    onClose: onCloseDeleteTravelinkModal
  } = useDisclosure()
  return (
    <>
      <ModalDeleteTravelknk
        isOpen={isOpenDeleteTravelinkModal}
        onClose={onCloseDeleteTravelinkModal}
        id={data.id}
      />
      <Box
        display={'block'}
        w={'100%'}
        h={'23.9rem'}
        borderRadius={'10'}
        filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        bgColor={'white'}
        marginTop={'2.2rem'}
      >
        <a href={`/${data.id}`}>
          <Box
            bgImage={data.thumbnail ? data.thumbnail : ''}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            bgPosition={'center center'}
            w={'100%'}
            h={'12.9rem'}
            borderTopRadius={'10'}
          />
        </a>

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
                <a href={`/${data.id}`}>{data.title}</a>
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
          <Box marginTop={'1.9rem'} marginRight={'2.1rem'}>
            <MenuOpenDeleteTravelink onOpen={onOpenDeleteTravelinkModal} />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
