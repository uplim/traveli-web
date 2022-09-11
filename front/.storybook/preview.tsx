import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Story } from '@storybook/react'
import { customTheme } from '../src/theme'
import { RecoilRoot } from 'recoil'

const withChakra = (Story: Story) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Story />
      </ChakraProvider>
    </RecoilRoot>
  )
}

export const decorators = [withChakra]
