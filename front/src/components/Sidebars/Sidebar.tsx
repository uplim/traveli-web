import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure
} from '@chakra-ui/react'
import { IconUser } from './../Icons/IconUser'
import { IconHelp } from './../Icons/IconHelp'
import { IconSignOut } from './../Icons/IconSignOut'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SidebarProps = {
  icon: string
  name: string
}

export const Sidebar = ({ icon, name }: SidebarProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const router = useRouter()

  return (
    // Back
    <Box>
      <Avatar w={'4rem'} h={'4rem'} src={icon} onClick={onOpen} />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay onClick={onClose} />
        <DrawerContent>
          <Box
            position={'fixed'}
            right={0}
            paddingTop={'3.1rem'}
            paddingLeft={'2rem'}
            w={'20.3rem'}
            h={'100vh'}
            bgColor={'white'}
            zIndex={4}
          >
            <Flex h={'4.6rem'} align={'center'}>
              <Avatar
                marginRight={'2rem'}
                w={'4.6rem'}
                h={'4.6rem'}
                src={icon}
                bgColor={'gray'}
              />
              <Box fontSize={'md'} fontWeight={'bold'}>
                {name}
              </Box>
            </Flex>

            <Flex h={'3.2rem'} align={'center'} marginTop={'2.5rem'}>
              <IconUser
                w={'3rem'}
                h={'3rem'}
                marginRight={'1.7rem'}
                color={'logoBlack'}
              />
              <Link href={router.basePath + '/user'} passHref>
                <Box color={'logoBlack'} fontSize={'md'} fontWeight={'bold'}>
                  プロフィール
                </Box>
              </Link>
            </Flex>

            <Box
              margin={'1.6rem 0 1.6rem 0'}
              w={'16.8rem'}
              h={'0.1rem'}
              bgColor={'#C6C6C6'}
            />

            <Flex h={'3.2rem'} align={'center'} marginBottom={'1.6rem'}>
              <IconHelp
                w={'3.2rem'}
                h={'3.2rem'}
                marginRight={'1.7rem'}
                color={'logoBlack'}
              />
              <Box color={'logoBlack'} fontSize={'md'} fontWeight={'bold'}>
                ヘルプ
              </Box>
            </Flex>

            <Flex h={'3.2rem'} align={'center'}>
              <IconSignOut
                w={'3.2rem'}
                h={'3.2rem'}
                marginRight={'1.7rem'}
                color={'logoBlack'}
              />
              <Box color={'logoBlack'} fontSize={'md'} fontWeight={'bold'}>
                ログアウト
              </Box>
            </Flex>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
