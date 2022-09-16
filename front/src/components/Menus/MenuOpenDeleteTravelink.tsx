import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { IconMenuButton } from '@/components/Icons'

type MenuOpenDeleteTravelinkProps = {
  onOpen: () => void
}

export const MenuOpenDeleteTravelink = ({
  onOpen
}: MenuOpenDeleteTravelinkProps) => {
  return (
    <Menu>
      <MenuButton>
        <Flex w={'2.4rem'} h={'2.4rem'} align={'center'} justify={'center'}>
          <IconMenuButton w={'1.6rem'} h={'1.6rem'} color={'gray'} />
        </Flex>
      </MenuButton>

      <MenuList
        padding={'1.35rem 0 0 2.4rem'}
        w={'13.9rem'}
        h={'5.2rem'}
        borderColor={'#CBD5E0'}
        borderRadius={'1.5rem'}
        boxShadow={0}
      >
        <MenuItem
          display={'flex'}
          padding={0}
          onClick={() => {
            onOpen()
          }}
        >
          <Box
            bgImage={'/images/icons/trash.svg'}
            w={'1.68rem'}
            h={'1.68rem'}
            marginRight={'1.6rem'}
          />
          <Box fontSize={'sm'} color={'#FF4D4D'}>
            削除する
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
