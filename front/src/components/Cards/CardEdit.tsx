import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react'
import { UseFormRegister, FieldError } from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { RadioCategoryList } from '@/components/Radios'
import { CategoryType } from '@/types/db'

type CardEditProps = {
  label: string
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
  setCategories: Dispatch<SetStateAction<CategoryType[]>>
}

export const CardEdit = ({
  label,
  index,
  register,
  remove,
  errors,
  setCurrentLabel,
  setIsMinimum,
  setCategories
}: CardEditProps) => {
  return (
    <>
      <Box>
        <Box
          marginTop={'0.4rem'}
          padding={'1.4rem 1.6rem 0 1.6rem'}
          w={'100%'}
          h={'27.4rem'}
          borderRadius={'1.5rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <Menu>
            <Flex position={'absolute'} right={'1.2rem'} zIndex={2}>
              <Spacer />
              <MenuButton>
                <Flex
                  w={'3.6rem'}
                  h={'3.6rem'}
                  align={'center'}
                  justify={'center'}
                >
                  <Box
                    bgImage={'/images/menuButton.svg'}
                    w={'2.4rem'}
                    h={'2.4rem'}
                  />
                </Flex>
              </MenuButton>
            </Flex>

            <MenuList
              padding={'1.35rem 0 0 2.4rem'}
              w={'16.8rem'}
              h={'8.8rem'}
              borderColor={'#CBD5E0'}
              borderRadius={'1.5rem'}
              boxShadow={0}
            >
              <MenuItem
                display={'flex'}
                padding={'0 0 1.35rem 0'}
                // TODO: useState
                onClick={() => setIsMinimum(true)}
              >
                {/* TODO:表示の最小化の実装 */}
                <Box
                  bgImage={'/images/closeMenu.svg'}
                  w={'1.5rem'}
                  h={'1.5rem'}
                  marginRight={'1.6rem'}
                />
                <Box fontSize={'sm'}>表示を最小化</Box>
              </MenuItem>
              <MenuItem
                display={'flex'}
                padding={0}
                onClick={() => {
                  remove()
                }}
              >
                <Box
                  bgImage={'/images/trash.svg'}
                  w={'1.68rem'}
                  h={'1.68rem'}
                  marginRight={'1.6rem'}
                />
                <Box fontSize={'sm'} color={'#FF4D4D'}>
                  削除する
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>

          <FormControl isInvalid={!!errors}>
            <FormLabel fontSize={'sm'} color={'#2D2D2D'}>
              カテゴリー
            </FormLabel>
            <RadioCategoryList setCategories={setCategories} />
            <FormLabel
              mt={'1.6rem'}
              h={'1.6rem'}
              fontSize={'sm'}
              color={'#2D2D2D'}
            >
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
            <FormErrorMessage>
              {errors?.[index] && errors?.[index].url?.message}
            </FormErrorMessage>

            <FormLabel
              display={'flex'}
              h={'1.6rem'}
              fontSize={'sm'}
              color={'#2D2D2D'}
              mt={'1.6rem'}
            >
              <Box>ラベル</Box>
              <Box color={'gray'}>（任意）</Box>
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
              defaultValue={label}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setCurrentLabel(e.target.value)
              }}
              placeholder={'例）宿泊先'}
            />
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
