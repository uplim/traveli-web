import { useState, Dispatch, SetStateAction } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box
} from '@chakra-ui/react'
import { UseFormRegister, FieldErrors, FieldArrayWithId } from 'react-hook-form'
import { RadioCategory } from '@/components/Radios'
import { CardLink } from '@/components/Cards'
import { Button } from '@/components/Buttons'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { LinkType } from '@/types/db'

type CardLinkEditProps = {
  register: UseFormRegister<Inputs>
  error?: FieldErrors<LinkType>
  fields: FieldArrayWithId<Inputs, 'links', 'id'>[]
  index: number
  isClickNext: boolean
  currentLink: LinkType
  setIsClickNext: Dispatch<SetStateAction<boolean>>
}

export const CardLinkEdit = ({
  register,
  error,
  index,
  isClickNext,
  fields,
  setIsClickNext,
  currentLink
}: CardLinkEditProps) => {
  const [isMinimum, setIsMinimum] = useState(false)

  // 次へを押された時、最後の要素以外は最小化する
  if (isClickNext && !isMinimum && fields.length !== index + 1) {
    setIsMinimum(true)
  }

  const onClickHandler = () => {
    setIsMinimum(false)
    setIsClickNext(false)
  }

  return (
    <>
      {isMinimum ? (
        <FormControl onClick={onClickHandler} isInvalid={!!error}>
          <CardLink label={currentLink.label} category={currentLink.category} />
          <FormErrorMessage pl={'1rem'}>
            {error?.url && error?.url.message}
          </FormErrorMessage>
        </FormControl>
      ) : (
        <Box
          marginTop={'1rem'}
          padding={'1.4rem 1.6rem 1.4rem 1.6rem'}
          w={'100%'}
          borderRadius={'1.5rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <FormControl as={'fieldset'}>
            <FormLabel fontSize={'sm'} color={'#2D2D2D'}>
              カテゴリー
            </FormLabel>
            <RadioCategory
              register={register}
              name={`links.${index}.category`}
            />
            <FormErrorMessage mb={'1rem'}>
              {error?.category && error?.category.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={'1.6rem'} isInvalid={!!error}>
            <FormLabel fontSize={'sm'} color={'#2D2D2D'}>
              URL
            </FormLabel>
            <Input
              marginTop={'0.3rem'}
              variant={'outline'}
              borderColor={'#ACC1CA'}
              w={'100%'}
              h={'4.4rem'}
              borderRightRadius={'10rem'}
              borderLeftRadius={'10rem'}
              isInvalid={!!error?.url}
              {...register(`links.${index}.url`)}
              placeholder={'https://'}
            />
            <FormErrorMessage mb={'1rem'}>
              {error?.url && error?.url.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mt={'1.6rem'}>
            <FormLabel
              fontSize={'sm'}
              color={'#2D2D2D'}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Box display={'inline'}>
                ラベル{' '}
                <Box as={'span'} color={'gray'}>
                  （任意）
                </Box>
              </Box>
              <Button p={'0'} color={'brandBlue'} borderRadius={'none'}>
                自動取得
              </Button>
            </FormLabel>
            <Input
              marginTop={'0.3rem'}
              variant={'outline'}
              borderColor={'#ACC1CA'}
              w={'100%'}
              h={'4.4rem'}
              borderRightRadius={'10rem'}
              borderLeftRadius={'10rem'}
              {...register(`links.${index}.label`)}
              placeholder={'例）宿泊先'}
            />
          </FormControl>
        </Box>
      )}
    </>
  )
}
