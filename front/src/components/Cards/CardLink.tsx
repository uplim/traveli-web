import { Dispatch, SetStateAction } from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Text
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

type CardLinkProps = {
  // icon: string
  label: string
  url?: string
  setIsMinimum?: Dispatch<SetStateAction<boolean>>
  setIsClickNext?: Dispatch<SetStateAction<boolean>>
  errors?:
    | {
        url?: FieldError | undefined
        label?: FieldError | undefined
      }[]
    | undefined
  index?: number
}

export const CardLink = ({
  label,
  url,
  setIsClickNext,
  setIsMinimum,
  errors,
  index
}: CardLinkProps) => {
  const onClick = () => {
    if (url) window.open(url)
    if (setIsMinimum && setIsClickNext) {
      setIsClickNext(false)
      setIsMinimum(false)
    }
  }

  return (
    <>
      <Flex
        position={'relative'}
        top={0}
        left={0}
        w={'100%'}
        h={'5.2rem'}
        borderRadius={'10rem'}
        bgColor={'white'}
        filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
        align={'center'}
        mt={'1rem'}
        onClick={onClick}
        cursor={'pointer'}
      >
        {/* TODO: アイコンPropsの受け取り */}
        <Box
          backgroundColor={'gray'}
          borderRadius={'100%'}
          w={'3.8rem'}
          h={'3.8rem'}
          marginLeft={'0.7rem'}
        />
        <Text
          w={'80%'}
          textAlign={'center'}
          fontSize={'md'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
          textOverflow={'ellipsis'}
          margin={'0 1.6rem'}
        >
          {label}
        </Text>
      </Flex>
      {index !== undefined && (
        <FormControl isInvalid={!!errors}>
          <FormErrorMessage>{errors?.[index].url?.message}</FormErrorMessage>
        </FormControl>
      )}
    </>
  )
}
