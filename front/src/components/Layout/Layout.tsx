import React from 'react'
import { Container, Flex } from '@chakra-ui/react'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minH={'100vh'} direction={'column'} bgColor={'base'} overflowX={'scroll'}>
      <Container as={'main'} maxW={'container.md'} minW={'container.sm'} px={'1.6rem'}>
        {children}
      </Container>
    </Flex>
  )
}
