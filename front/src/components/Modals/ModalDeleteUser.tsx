import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  UnorderedList,
  ListItem,
  Box
} from '@chakra-ui/react'
import { useDeleteUser } from '@/hooks/firestore'

type Props = {
  isOpen: boolean
  onClose: () => void
  id: string
}

export const ModalDeleteUser = ({ isOpen, onClose, id }: Props) => {
  const { onClickDeleteUser } = useDeleteUser()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        margin={'auto 0'}
        width={'90vw'}
        maxW={'90vw'}
        height={'auto'}
        borderRadius={'3rem'}
        padding={'1.5rem'}
      >
        <ModalHeader textAlign={'center'}>アカウント削除</ModalHeader>
        {/* <ModalCloseButton margin={'1rem'} /> */}
        <ModalBody>
          <Text>削除すると以下の情報がすべて失われます</Text>
          <Box
            bgColor={'#f1f1f1'}
            p={'1rem'}
            borderRadius={'1rem'}
            m={'1rem 0'}
          >
            <UnorderedList>
              <ListItem>プロフィール情報</ListItem>
              <ListItem>作成したトラべリンク</ListItem>
              <ListItem>保存したトラべリンク</ListItem>
            </UnorderedList>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button variant={'outline'} size="md" mr={3} onClick={onClose}>
            キャンセル
          </Button>
          <Button
            colorScheme="alertRed"
            size="md"
            w={'5rem'}
            h={'3rem'}
            onClick={() => onClickDeleteUser(id)}
          >
            削除
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
