import { Dispatch, SetStateAction } from 'react'
import { useRadioGroup } from '@chakra-ui/react'
import { CategoryType } from '@/types/db'

export const useRadioCategory = (
  setCategory: Dispatch<SetStateAction<CategoryType[]>>
) => {
  const categoryOptions = ['場所', '食事', 'その他']

  const onChangeHandler = (value: CategoryType) => {
    setCategory((categories) => [...categories, value])
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: 'その他',
    onChange: onChangeHandler
  })

  const group = getRootProps()

  return {
    categoryOptions,
    getRadioProps,
    group
  }
}
