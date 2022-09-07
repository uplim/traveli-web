import styled from '@emotion/styled'
import { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import {
  HStack,
  VisuallyHiddenInput,
  FormLabel,
  Box as ChakraBox
} from '@chakra-ui/react'
import { Path, UseFormRegister } from 'react-hook-form'

type RadioCategoryProps = {
  name: Path<Inputs>
  register: UseFormRegister<Inputs>
}

export const RadioCategory = ({ name, register }: RadioCategoryProps) => {
  return (
    <HStack>
      <Box>
        <VisuallyHiddenInput
          {...register(name)}
          type={'radio'}
          id={`${name}.place`}
          value={'場所'}
        />
        <FormLabel
          htmlFor={`${name}.place`}
          display={'block'}
          cursor={'pointer'}
          borderWidth={'1px'}
          borderRadius={'full'}
          borderColor={'#ACC1CA'}
          bg={'white'}
          px={5}
          py={3}
        >
          場所
        </FormLabel>
      </Box>
      <Box>
        <VisuallyHiddenInput
          {...register(name)}
          type={'radio'}
          id={`${name}.food`}
          value={'食事'}
        />
        <FormLabel
          htmlFor={`${name}.food`}
          display={'block'}
          cursor={'pointer'}
          borderWidth={'1px'}
          borderRadius={'full'}
          borderColor={'#ACC1CA'}
          bg={'white'}
          px={5}
          py={3}
        >
          食事
        </FormLabel>
      </Box>

      <Box>
        <VisuallyHiddenInput
          {...register(name)}
          type={'radio'}
          id={`${name}.other`}
          value={'その他'}
        />
        <FormLabel
          htmlFor={`${name}.other`}
          display={'block'}
          cursor={'pointer'}
          borderWidth={'1px'}
          borderRadius={'full'}
          borderColor={'#ACC1CA'}
          bg={'white'}
          px={5}
          py={3}
        >
          その他
        </FormLabel>
      </Box>
    </HStack>
  )
}

const Box = styled(ChakraBox)`
  & {
    input:checked + label {
      background-color: #1a489d;
      color: white;
      border-color: #1a489d;
    }
    input:focus + label {
      box-shadow: outline;
    }
  }
`
