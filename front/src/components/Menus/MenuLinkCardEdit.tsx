import { SetStateAction, Dispatch } from 'react'
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react'
import { CategoryType } from '@/types/db/travelink'

type MenuLinkCardEditProps = {
  setCategories: Dispatch<SetStateAction<CategoryType[]>>
  setIsMinimum: Dispatch<SetStateAction<boolean>>
  remove: () => void
  index: number
}

export const MenuLinkCardEdit = ({
  setCategories,
  setIsMinimum,
  remove,
  index
}: MenuLinkCardEditProps) => {
  return (
    <Menu>
      <Flex position={'absolute'} right={'1.2rem'} zIndex={2}>
        <Spacer />
        <MenuButton>
          <Flex w={'3.6rem'} h={'3.6rem'} align={'center'} justify={'center'}>
            <Box bgImage={'/images/menuButton.svg'} w={'2.4rem'} h={'2.4rem'} />
          </Flex>
        </MenuButton>
      </Flex>

      <MenuList
        padding={'1.35rem 0 0 2.4rem'}
        w={'16.8rem'}
        h={'8.8rem'}
        borderColor={'#CBD5E0'}
        borderRadius={'1.5rem'}
        boxShadow={0}
      >
        <MenuItem
          display={'flex'}
          padding={'0 0 1.35rem 0'}
          onClick={() => setIsMinimum(true)}
        >
          <Box
            bgImage={'/images/closeMenu.svg'}
            w={'1.5rem'}
            h={'1.5rem'}
            marginRight={'1.6rem'}
          />
          <Box fontSize={'sm'}>表示を最小化</Box>
        </MenuItem>
        <MenuItem
          display={'flex'}
          padding={0}
          onClick={() => {
            // stateのカテゴリーも一緒に削除する
            // TODO: これもRHFで管理する
            setCategories((categories) => {
              const cpCategories = categories
              cpCategories.splice(index, 1)
              return cpCategories
            })
            remove()
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
