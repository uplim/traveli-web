import { forwardRef, Button as ChakraButton } from '@chakra-ui/react'
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export const Button = forwardRef<ChakraButtonProps, 'button'>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraButton {...props} ref={ref}>
        {children}
      </ChakraButton>
    )
  }
)
