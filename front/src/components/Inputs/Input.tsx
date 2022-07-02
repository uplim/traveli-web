import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
  InputGroup,
  FormLabel
} from '@chakra-ui/react'

type InputProps = {
  label: string
}

export const Input = forwardRef<ChakraInputProps & InputProps, 'input'>(
  ({ label, ...props }, ref) => {
    return (
      <InputGroup display={'flex'} flexDirection={'column'}>
        <FormLabel fontWeight={300} fontSize={'sm'} color={'black'}>
          {label}
        </FormLabel>
        <ChakraInput
          color={'black'}
          fontSize={'sm'}
          fontWeight={400}
          bgColor={'white'}
          display={'block'}
          borderRadius={'10rem'}
          h={'4.6rem'}
          px={'2.3rem'}
          py={'1.2rem'}
          border={'none'}
          _placeholder={{ color: '#838383' }}
          ref={ref}
          boxShadow={'4px 4px 10px #E4EBEE'}
          {...props}
        />
      </InputGroup>
    )
  }
)
