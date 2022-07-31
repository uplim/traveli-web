import { Dispatch, SetStateAction } from 'react'
import { useRadioGroup } from '@chakra-ui/react'
import { CategoryType } from '@/types/db'

export const useRadioCategory = (
  categories: CategoryType[],
  setCategories: Dispatch<SetStateAction<CategoryType[]>>,
  index: number
) => {
  const categoryOptions = ['場所', '食事', 'その他']

  const onChangeHandler = (value: CategoryType) => {
    setCategories((categories) => {
      const cpCategories = categories
      cpCategories.splice(index, 1, value)
      return cpCategories
    })
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: categories[index],
    onChange: onChangeHandler
  })

  const group = getRootProps()

  return {
    categoryOptions,
    getRadioProps,
    group
  }
}
