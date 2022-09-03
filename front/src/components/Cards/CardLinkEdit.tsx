import { FieldArrayWithId, FieldErrors, UseFormRegister, UseFieldArrayAppend } from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { LinkType } from '@/types/db'
import {
  FormControl,
  Box,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex
} from '@chakra-ui/react'
import { Button } from '@/components/Buttons'
import { RadioCategory } from '@/components/Radios'

type CardLinkEditProps = {
  fileds: FieldArrayWithId<Inputs, 'links', 'id'>[]
  errors?: FieldErrors<LinkType[]>
  register: UseFormRegister<Inputs>
  append: UseFieldArrayAppend<Inputs, 'links'>
}

export const CardLinkEdit = ({
  fileds,
  errors,
  register,
  append
}: CardLinkEditProps) => {
  return (
    <>
      {fileds.map((item, index) => (
        <Box
          marginTop={'1rem'}
          padding={'1.4rem 1.6rem 1.4rem 1.6rem'}
          w={'100%'}
          borderRadius={'1.5rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
          key={item.id}
        >
          <FormControl as={'fieldset'}>
            <FormLabel fontSize={'sm'} color={'#2D2D2D'}>
              カテゴリー
            </FormLabel>
            <RadioCategory
              register={register}
              name={`links.${index}.category`}
            />
          </FormControl>
          <FormControl mt={'1.6rem'} isInvalid={!!errors}>
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
              isInvalid={errors?.[index] ? true : false}
              {...register(`links.${index}.url`)}
              placeholder={'https://'}
            />
            <FormErrorMessage mb={'1rem'}>
              {errors?.[index] && errors?.[index].url?.message}
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
      ))}
      <Flex
        align={'center'}
        justify={'center'}
        marginTop={'1.6rem'}
        color={'brandBlue'}
      >
        <Box bgImage={'/images/plus.svg'} w={'2.4rem'} h={'2.4rem'} />
        <Box
          as={'button'}
          fontSize={'md'}
          type={'button'}
          onClick={() => {
            append({ url: '', label: '', category: 'その他' })
          }}
        >
          リストの追加
        </Box>
      </Flex>
    </>
  )
}
