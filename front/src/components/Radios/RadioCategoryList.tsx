import { Dispatch, SetStateAction } from 'react'
import { HStack } from '@chakra-ui/react'
import { RadioCategoryItem } from '@/components/Radios'
import { useRadioCategory } from '@/hooks/radio'
import { CategoryType } from '@/types/db'

type RadioCategoryListProps = {
  categories: CategoryType[]
  setCategories: Dispatch<SetStateAction<CategoryType[]>>
  index: number
}

export const RadioCategoryList = ({
  categories,
  setCategories,
  index
}: RadioCategoryListProps) => {
  const { categoryOptions, getRadioProps, group } = useRadioCategory(
    categories,
    setCategories,
    index
  )

  return (
    <HStack {...group}>
      {categoryOptions.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCategoryItem key={value} radio={radio}>
            {value}
          </RadioCategoryItem>
        )
      })}
    </HStack>
  )
}
