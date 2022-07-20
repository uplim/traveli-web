import { Avatar, Box, Divider, Flex } from '@chakra-ui/react'
import { IconUser } from './../Icons/IconUser'
import { IconHelp } from './../Icons/IconHelp'
import { IconSignOut } from './../Icons/IconSignOut'

type SidebarProps = {
  iconSrc: string
}

export const Sidebar = ({ iconSrc }: SidebarProps) => {
  return (
    <Box>
      <Box
        position={'fixed'}
        bgColor={'black'}
        opacity={'20%'}
        zIndex={3}
        marginLeft={'-5rem'}
        w={'calc(100vh + 10rem)'}
        h={'100vh'}
      />
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
            src={iconSrc}
            bgColor={'gray'}
          />
          <Box fontSize={'md'} fontWeight={'bold'}>
            Piyo
          </Box>
        </Flex>

        <Flex h={'3.2rem'} align={'center'} marginTop={'2.5rem'}>
          <IconUser
            w={'3rem'}
            h={'3rem'}
            marginRight={'1.7rem'}
            color={'logoBlack'}
          />
          <Box color={'logoBlack'} fontSize={'md'} fontWeight={'bold'}>
            プロフィール
          </Box>
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
    </Box>
  )
}
