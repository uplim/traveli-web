import React from 'react'
import { Box, useRadio, UseRadioProps } from '@chakra-ui/react'

type RadioCategoryItemProps = {
  radio: UseRadioProps
  children: React.ReactNode | string
}

export const RadioCategoryItem = ({
  radio,
  children
}: RadioCategoryItemProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="full"
        borderColor="#ACC1CA"
        bg="white"
        _checked={{
          bg: 'brandBlue',
          color: 'white',
          borderColor: 'brandBlue'
        }}
        _focus={{
          boxShadow: 'outline'
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
}
