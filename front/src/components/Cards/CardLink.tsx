import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  Image
} from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { FieldError } from 'react-hook-form'
import { CategoryType } from '@/types/db'

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
      }
    | undefined
  category: CategoryType
}

export const CardLink = ({
  label,
  url,
  setIsClickNext,
  setIsMinimum,
  errors,
  category
}: CardLinkProps) => {
  const onClick = () => {
    if (url) window.open(url)
    if (setIsMinimum && setIsClickNext) {
      setIsClickNext(false)
      setIsMinimum(false)
    }
  }

  const handleCategoryIcon = (category: CategoryType) => {
    if (category === '食事') return '/images/icons/food.svg'
    if (category === '場所') return '/images/icons/place.svg'
    return '/images/icons/other.svg'
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
        <Box
          borderRadius={'100%'}
          w={'2.8rem'}
          h={'2.8rem'}
          marginLeft={'1.2rem'}
        >
          <Image alt={''} src={handleCategoryIcon(category)} />
        </Box>

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
      {setIsMinimum && (
        <FormControl isInvalid={!!errors}>
          <FormErrorMessage>{errors && errors.url?.message}</FormErrorMessage>
        </FormControl>
      )}
    </>
  )
}
