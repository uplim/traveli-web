import {
  Flex,
  Image,
  Text,
  Spacer,
  Box,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  Button
} from '@chakra-ui/react'
import { useGetTravelink } from '@/hooks/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { IconQr, IconShare } from '@/components/Icons'
import { ButtonIconRound, ButtonViewChange } from '@/components/Buttons'
import { CardLink } from '@/components/Cards'
import { ModalQrCode } from '@/components/Modals'
import { Loading } from '@/components/Loadings'
import { useDisclosure } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useButtonBookmark } from '@/hooks/button'
import { useFilterTravelink } from '@/hooks/filter'

const LinkList = () => {
  const router = useRouter()
  const currentUser = useRecoilValue(currentUserState)
  const { travelink } = useGetTravelink()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onClickBookmark, disabled, isBookmarked } = useButtonBookmark()
  const filterTravelink = useFilterTravelink

  return (
    <>
      {!travelink ? (
        <Loading />
      ) : (
        <>
          <Box
            position={'absolute'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            top={'0'}
            left={'0'}
            w={'100vw'}
            bgImage={travelink.thumbnail}
            h={'24rem'}
          />
          <Box
            position={'absolute'}
            top={'18rem'}
            left={'0'}
            w={'100vw'}
            h={'19rem'}
            bgColor={'white'}
            borderRadius={'3.0rem 3.0rem 0 0'}
          />

          {/* TODO：UI通りにしたい */}
          <Tabs
            isFitted
            colorScheme={'brandPink'}
            color={'black'}
            position={'absolute'}
            top={'37rem'}
            left={'0'}
            w={'100vw'}
            h={'30%'}
          >
            <TabList bgColor={'white'}>
              <Tab>全て</Tab>
              <Tab>食事</Tab>
              <Tab>場所</Tab>
              <Tab>その他</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {travelink.links.map(({ url, label }, index) => (
                  <CardLink label={label} url={url} key={`all_${index}`} />
                ))}
              </TabPanel>
              <TabPanel>
                {filterTravelink(travelink, '食事').map(
                  ({ url, label }, index) => (
                    <CardLink label={label} url={url} key={`food_${index}`} />
                  )
                )}
              </TabPanel>
              <TabPanel>
                {filterTravelink(travelink, '場所').map(
                  ({ url, label }, index) => (
                    <CardLink label={label} url={url} key={`place_${index}`} />
                  )
                )}
              </TabPanel>
              <TabPanel>
                {filterTravelink(travelink, 'その他').map(
                  ({ url, label }, index) => (
                    <CardLink label={label} url={url} key={`other_${index}`} />
                  )
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
            <Link href={router.basePath + '/home'}>
              <ButtonIconRound iconType="return" />
            </Link>
            <Spacer />
            <ButtonIconRound iconType="edit" />
          </Flex>
          <Box>
            <Image
              borderRadius="full"
              boxSize={'12rem'}
              src={travelink.thumbnail}
              alt={'img'}
              margin={'6rem auto 0 auto'}
              border={'solid white 0.4rem'}
            />
            <ButtonViewChange
              position={'absolute'}
              top={'8rem'}
              right={'1rem'}
              w={'100vw'}
              h={'19rem'}
            />
            <Text
              fontSize={'2rem'}
              fontWeight={'bold'}
              textAlign={'center'}
              marginTop={'1rem'}
            >
              {travelink.title}
            </Text>
            {travelink.date[0] && (
              <Text fontSize={'1.2rem'} color={'gray'} textAlign={'center'}>
                {travelink.date[0] &&
                  format(travelink.date[0].toDate(), 'yyyy/MM/dd')}
                ~
                {travelink.date[1] &&
                  format(travelink.date[1].toDate(), 'yyyy/MM/dd')}
              </Text>
            )}
            <Flex w={'70%'} margin={'0.9rem auto'}>
              <Button
                disabled={disabled}
                display={'inline'}
                h={'auto'}
                onClick={() => onClickBookmark(currentUser, travelink)}
              >
                {!isBookmarked ? (
                  <>
                    <Image
                      alt={''}
                      src={'/images/icons/bookmark-outline.svg'}
                      w={'2.5rem'}
                      h={'2.5rem'}
                      margin={'0 auto'}
                    />
                    <Text>保存する</Text>
                  </>
                ) : (
                  <>
                    <Image
                      alt={''}
                      src={'/images/icons/bookmark-solid.svg'}
                      w={'2.5rem'}
                      h={'2.5rem'}
                      margin={'0 auto'}
                    />
                    <Text>保存済み</Text>
                  </>
                )}
              </Button>
              <Spacer />
              <Button onClick={onOpen} display={'inline'} h={'auto'}>
                <IconQr
                  w={'2.5rem'}
                  h={'2.5rem'}
                  margin={'0.2rem auto 0 auto'}
                />
                <Text>QRコード</Text>
              </Button>
              <ModalQrCode
                thumbnail={travelink.thumbnail}
                title={travelink.title}
                date={travelink.date}
                router={router.asPath}
                isOpen={isOpen}
                onClose={onClose}
              />
              <Spacer />
              <Button display={'inline'} h={'auto'}>
                <IconShare w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
                <Text>共有する</Text>
              </Button>
            </Flex>
          </Box>
        </>
      )}
    </>
  )
}

export default LinkList
