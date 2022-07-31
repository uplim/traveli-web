import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { UseFormRegister, FieldError, UseFormSetValue } from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { RadioCategoryList } from '@/components/Radios'
import { CategoryType } from '@/types/db'
import { MenuLinkCardEdit } from '@/components/Menus'
import { useFetchOgp } from '@/hooks/api'
import { Button } from '@/components/Buttons'

type CardEditProps = {
  index: number
  register: UseFormRegister<Inputs>
  remove: () => void
  errors?:
    | {
        url?: FieldError | undefined
        label?: FieldError | undefined
      }[]
    | undefined
  setCurrentLabel: Dispatch<SetStateAction<string>>
  setIsMinimum: Dispatch<SetStateAction<boolean>>
  categories: CategoryType[]
  setCategories: Dispatch<SetStateAction<CategoryType[]>>
  url: string
  setValue: UseFormSetValue<Inputs>
  currentUrl: string
  setCurrentUrl: Dispatch<SetStateAction<string>>
}

export const CardEdit = ({
  index,
  register,
  remove,
  errors,
  setCurrentLabel,
  setIsMinimum,
  categories,
  setCategories,
  setValue,
  currentUrl,
  setCurrentUrl
}: CardEditProps) => {
  const { disabled, ogp, onClickHandler, setOgp } = useFetchOgp(
    setCurrentLabel,
    setValue,
    index
  )

  return (
    <Box
      marginTop={'1rem'}
      padding={'1.4rem 1.6rem 1.4rem 1.6rem'}
      w={'100%'}
      borderRadius={'1.5rem'}
      bgColor={'white'}
      filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
    >
      <MenuLinkCardEdit
        setIsMinimum={setIsMinimum}
        remove={remove}
        index={index}
        setCategories={setCategories}
      />

      <FormControl>
        <FormLabel fontSize={'sm'} color={'#2D2D2D'}>
          カテゴリー
        </FormLabel>
        <RadioCategoryList
          categories={categories}
          index={index}
          setCategories={setCategories}
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCurrentUrl(e.target.value)
          }}
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
          <Button
            disabled={disabled}
            onClick={() => {
              onClickHandler(currentUrl)
            }}
            p={'0'}
            borderBottom={disabled ? 'none' : '0.1rem solid'}
            borderColor={disabled ? 'none' : 'brandBlue'}
            color={'brandBlue'}
            borderRadius={'none'}
          >
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
          onFocus={() => {
            setOgp(undefined)
          }}
          borderLeftRadius={'10rem'}
          {...register(`links.${index}.label`)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCurrentLabel(e.target.value)
          }}
          value={ogp && ogp.title}
          placeholder={disabled ? '取得中' : '例）宿泊先'}
        />
      </FormControl>
    </Box>
  )
}
