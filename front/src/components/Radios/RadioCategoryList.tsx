import { HStack, useRadioGroup } from '@chakra-ui/react'
import { RadioCategoryItem } from './RadioCategoryItem'

export const RadioCategoryList = () => {
  const categoryOptions = ['場所', '食事', 'その他']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: 'その他',
    onChange: console.log
  })

  const group = getRootProps()

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
