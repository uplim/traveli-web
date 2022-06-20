import React from 'react'
import { Button, Container, Flex } from '@chakra-ui/react'
import { useSignOut } from '@/hooks/auth/'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { signOutHandler, disabled } = useSignOut()
  return (
    <Flex
      minH={'100vh'}
      direction={'column'}
      bgColor={'base'}
      overflowX={'scroll'}
    >
      <Container
        as={'main'}
        maxW={'container.md'}
        minW={'container.sm'}
        px={'1.6rem'}
      >
        <Button
          disabled={disabled}
          onClick={() => {
            signOutHandler()
          }}
          bgColor={'brandBlue'}
        >
          サインアウト
        </Button>
        {children}
      </Container>
    </Flex>
  )
}
