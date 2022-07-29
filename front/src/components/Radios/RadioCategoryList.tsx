import { Dispatch, SetStateAction } from 'react'
import { HStack } from '@chakra-ui/react'
import { RadioCategoryItem } from '@/components/Radios'
import { useRadioCategory } from '@/hooks/radio'
import { CategoryType } from '@/types/db'

type RadioCategoryListProps = {
  setCategories: Dispatch<SetStateAction<CategoryType[]>>
}

export const RadioCategoryList = ({
  setCategories
}: RadioCategoryListProps) => {
  const { categoryOptions, getRadioProps, group } =
    useRadioCategory(setCategories)

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
