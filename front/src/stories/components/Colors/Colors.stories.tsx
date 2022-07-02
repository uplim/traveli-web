import { Story, Meta } from '@storybook/react'
import { Box, Text } from '@chakra-ui/react'

export default {
  title: 'utility/ColorPalette'
} as Meta

const colors = [
  { color: 'white' },
  { color: 'base' },
  { color: 'logoBlack' },
  { color: 'brandBlue' },
  { color: 'gray' },
  { color: 'black' }
]

const Template: Story = () => (
  <Box maxW={'80%'}>
    {colors.map(({ color }, index) => (
      <Box key={index} mt={'2rem'}>
        <Box bgColor={color} h={'5rem'} />
        <Text>{color}</Text>
      </Box>
    ))}
  </Box>
)

export const Default = Template.bind({})
