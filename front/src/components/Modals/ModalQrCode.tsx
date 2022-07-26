import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { Box, Text, Image } from '@chakra-ui/react'
import QRCodeSVG from 'qrcode.react'
import { format } from 'date-fns'
import { Timestamp } from 'firebase/firestore'

type QrCodeProps = {
  thumbnail: string
  title: string
  date: [Timestamp | null, Timestamp | null]
  router: string
  isOpen: boolean
  onClose: () => void
}

export const ModalQrCode = ({
  thumbnail,
  title,
  date,
  router,
  isOpen,
  onClose
}: QrCodeProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        margin={'auto 0'}
        width={'90vw'}
        maxW={'90vw'}
        height={'auto'}
        borderRadius={'3rem'}
        padding={'2rem'}
      >
        <ModalHeader />
        <ModalCloseButton margin={'1rem'} />
        <ModalBody>
          <Image
            borderRadius="full"
            boxSize={'12rem'}
            src={thumbnail}
            alt={'img'}
            margin={'0 auto'}
            border={'solid white 0.4rem'}
          />
          <Text
            fontSize={'2rem'}
            fontWeight={'bold'}
            textAlign={'center'}
            marginTop={'1rem'}
          >
            {title}
          </Text>
          {date[0] && (
            <Text fontSize={'1.2rem'} color={'gray'} textAlign={'center'}>
              {date[0] && format(date[0].toDate(), 'yyyy/MM/dd')}~
              {date[1] && format(date[1].toDate(), 'yyyy/MM/dd')}
            </Text>
          )}
          <Box
            textAlign={'center'}
            display={'flex'}
            justifyContent={'center'}
            margin={'2rem 0'}
          >
            <QRCodeSVG
              value={window.location.origin + router}
              size={168}
              includeMargin={false}
              imageSettings={{
                src: '/images/traveli-logo.svg',
                x: undefined,
                y: undefined,
                height: 32,
                width: 32,
                excavate: true
              }}
            />
          </Box>
          <Text textAlign={'center'} margin={'0 auto'} w={'24rem'}>
            QRコードを読み取って、
            <br />
            友達や家族に共有しましょう
          </Text>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
