import { forwardRef, Button as ChakraButton } from '@chakra-ui/react'
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import React from 'react'

type ButtonProps = {
  disabled?: boolean
  children: string | React.ReactNode
}

export const Button = forwardRef<ChakraButtonProps | ButtonProps, 'button'>(
  ({ children, disabled, ...props }, ref) => {
    return (
      <ChakraButton {...props} ref={ref} opacity={disabled ? '0.7' : '1'}>
        {children}
      </ChakraButton>
    )
  }
)
