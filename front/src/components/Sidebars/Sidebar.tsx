import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Image,
  Text
} from '@chakra-ui/react'
import { IconUser, IconHelp, IconSignOut } from '@/components/Icons'
import NextLink from 'next/link'
import { useSignInGoogle } from '@/hooks/auth/useSignInGoogle'
import { Button } from '@/components/Buttons'
import { useSignOut } from '@/hooks/auth'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
  icon: string
  name: string
}

export const Sidebar = ({ isOpen, onClose, icon, name }: SidebarProps) => {
  const {
    signInGoogleHandler,
    disabled: signInDisabled,
    currentUser
  } = useSignInGoogle()
  const { signOutHandler, disabled: signOutDisabled } = useSignOut()

  return (
    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
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
            <NextLink href={'/user'} passHref>
              <Link>
                <Box color={'logoBlack'} fontSize={'md'} fontWeight={'bold'}>
                  プロフィール
                </Box>
              </Link>
            </NextLink>
          </Flex>

          <Box
            margin={'1.6rem 0 1.6rem 0'}
            w={'16.8rem'}
            h={'0.1rem'}
            bgColor={'#C6C6C6'}
          />

          <Flex h={'3.2rem'} align={'center'} mt={'1.6rem'}>
            <Image
              alt={''}
              src={'/images/icons/google.svg'}
              w={'3.2rem'}
              h={'3.2rem'}
              marginRight={'1.7rem'}
            />
            {currentUser?.isAnonymous ? (
              <Button
                color={'logoBlack'}
                fontSize={'md'}
                fontWeight={'bold'}
                padding={0}
                disabled={signInDisabled}
                onClick={() => signInGoogleHandler()}
              >
                Google連携
              </Button>
            ) : (
              <Text color={'logoBlack'} fontSize={'md'} fontWeight={'bold'}>
                Google連携済み
              </Text>
            )}
          </Flex>

          <Flex h={'3.2rem'} align={'center'} mt={'1.6rem'}>
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

          {currentUser?.isAnonymous ? (
            <Flex h={'3.2rem'} align={'center'} mt={'1.6rem'}>
              <Image
                src={'/images/icons/trash.svg'}
                alt={''}
                w={'3.2rem'}
                h={'3.2rem'}
                marginRight={'1.7rem'}
              />
              <Button
                color={'#FF4D4D'}
                fontSize={'md'}
                fontWeight={'bold'}
                padding={0}
              >
                アカウント削除
              </Button>
            </Flex>
          ) : (
            <>
              <Flex h={'3.2rem'} align={'center'} mt={'1.6rem'}>
                <IconSignOut
                  w={'3.2rem'}
                  h={'3.2rem'}
                  marginRight={'1.7rem'}
                  color={'logoBlack'}
                />
                <Button
                  color={'logoBlack'}
                  fontSize={'md'}
                  disabled={signOutDisabled}
                  fontWeight={'bold'}
                  padding={0}
                  onClick={() => signOutHandler()}
                >
                  ログアウト
                </Button>
              </Flex>

              <Flex h={'3.2rem'} align={'center'} mt={'1.6rem'}>
                <Image
                  src={'/images/icons/trash.svg'}
                  alt={''}
                  w={'3.2rem'}
                  h={'3.2rem'}
                  marginRight={'1.7rem'}
                />
                <Button
                  color={'#FF4D4D'}
                  fontSize={'md'}
                  fontWeight={'bold'}
                  padding={0}
                >
                  アカウント削除
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
