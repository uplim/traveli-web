import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { ModalDeleteUser } from '@/components/Modals'

type ButtonDeleteUserProps = {
  id: string
}

export const ButtonDeleteUser = ({ id }: ButtonDeleteUserProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        color={'#FF4D4D'}
        fontSize={'md'}
        fontWeight={'bold'}
        padding={0}
      >
        アカウント削除
      </Button>
      <ModalDeleteUser isOpen={isOpen} onClose={onClose} id={id} />
    </>
  )
}
