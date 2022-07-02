import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Story } from '@storybook/react'
import { customTheme } from '../src/theme';

const withChakra = (Story: Story) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Story />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
