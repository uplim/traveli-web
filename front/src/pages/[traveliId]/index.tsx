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
import { format } from 'date-fns'
import { IconCheck, IconQr } from '@/components/Icons'
import { ButtonIconRound } from '@/components/Buttons'
import { CardLink } from '@/components/Cards'
import { ModalQrCode, ModalSignIn } from '@/components/Modals'
import { Loading } from '@/components/Loadings'
import { useDisclosure } from '@chakra-ui/react'
import { useButtonBookmark } from '@/hooks/button'
import { useFilterTravelink } from '@/hooks/filter'
import { useCopyTextToClipboard } from '@/hooks/copy'
import { currentUserState } from '@/recoil/atoms'
import { useRecoilValue } from 'recoil'

const LinkList = () => {
  const currentUser = useRecoilValue(currentUserState)
  const { travelink } = useGetTravelink()
  const {
    isOpen: isOpenQrCodeModal,
    onOpen: onOpenQrCodeModal,
    onClose: onCloseQrCodeModal
  } = useDisclosure()
  const {
    isOpen: isOpenSignInModal,
    onOpen: onOpenSignInModal,
    onClose: onCloseSignInModal
  } = useDisclosure()
  const { onClickBookmark, disabled, isBookmarked } = useButtonBookmark()
  const filterTravelink = useFilterTravelink
  const {
    copyTextToClipboard,
    disabled: copyDisabled,
    copied
  } = useCopyTextToClipboard()

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
            bgPosition={'center center'}
            top={'0'}
            left={'0'}
            w={'100vw'}
            bgImage={
              travelink.thumbnail ? travelink.thumbnail : '/images/noImage.png'
            }
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
                {travelink.links.map(({ url, label, category }, index) => (
                  <CardLink
                    label={!label ? url : label}
                    url={url}
                    key={`all_${index}`}
                    category={category}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                {filterTravelink(travelink, '食事').map(
                  ({ url, label, category }, index) => (
                    <CardLink
                      label={!label ? url : label}
                      url={url}
                      key={`food_${index}`}
                      category={category}
                    />
                  )
                )}
              </TabPanel>
              <TabPanel>
                {filterTravelink(travelink, '場所').map(
                  ({ url, label, category }, index) => (
                    <CardLink
                      label={!label ? url : label}
                      url={url}
                      key={`place_${index}`}
                      category={category}
                    />
                  )
                )}
              </TabPanel>
              <TabPanel>
                {filterTravelink(travelink, 'その他').map(
                  ({ url, label, category }, index) => (
                    <CardLink
                      label={!label ? url : label}
                      url={url}
                      key={`other_${index}`}
                      category={category}
                    />
                  )
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
            {currentUser && (
              <>
                <Link href={'/home'}>
                  <ButtonIconRound as={'a'} iconType={'return'} />
                </Link>
                <Spacer />
                {/* ownerもしくはcanEditがTrueの時だけ編集ボタンをつける */}
                {currentUser.uid === travelink.ownerId ||
                  (travelink.canEdit && (
                    <Link href={`/${travelink.id}/edit`}>
                      <ButtonIconRound as={'a'} iconType={'edit'} />
                    </Link>
                  ))}
              </>
            )}
          </Flex>
          <Box>
            <Image
              borderRadius={'full'}
              boxSize={'12rem'}
              src={
                travelink.thumbnail
                  ? travelink.thumbnail
                  : '/images/noImage_icon.png'
              }
              alt={'img'}
              margin={'6rem auto 0 auto'}
              border={'solid white 0.4rem'}
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
                onClick={() =>
                  !currentUser
                    ? onOpenSignInModal()
                    : onClickBookmark(travelink, currentUser)
                }
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
              <ModalSignIn
                isOpen={isOpenSignInModal}
                onClose={onCloseSignInModal}
              />
              <Spacer />
              <Button onClick={onOpenQrCodeModal} display={'inline'} h={'auto'}>
                <IconQr
                  w={'2.5rem'}
                  h={'2.5rem'}
                  margin={'0.2rem auto 0 auto'}
                />
                <Text>QRコード</Text>
              </Button>
              <ModalQrCode
                thumbnail={
                  travelink.thumbnail
                    ? travelink.thumbnail
                    : '/images/noImage_icon.png'
                }
                title={travelink.title}
                date={travelink.date}
                path={travelink.id}
                isOpen={isOpenQrCodeModal}
                onClose={onCloseQrCodeModal}
              />
              <Spacer />
              <Button
                disabled={copyDisabled}
                display={'inline'}
                h={'auto'}
                w={'8.4rem'}
                onClick={() =>
                  copyTextToClipboard(
                    `https://traveli-web.vercel.app/${travelink.id}`
                  )
                }
              >
                {copied ? (
                  <IconCheck
                    color={'#77B255'}
                    src={'/images/icons/check.svg'}
                    alt={''}
                    w={'2.5rem'}
                    h={'2.5rem'}
                    margin={'0 auto'}
                  />
                ) : (
                  <Image
                    src={'/images/icons/copy.svg'}
                    alt={''}
                    w={'2.5rem'}
                    h={'2.5rem'}
                    margin={'0 auto'}
                  />
                )}
                <Text>コピー</Text>
              </Button>
            </Flex>
          </Box>
        </>
      )}
    </>
  )
}

export default LinkList
