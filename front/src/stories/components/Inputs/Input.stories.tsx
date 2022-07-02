import { Story, Meta } from '@storybook/react'
import { Input } from '@/components/Inputs'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/Inputs/Input',
  component: Input
} as Meta

const Template: Story = (args) => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} px={'1.6rem'} h={'100vh'}>
      <Input label={args.label} placeholder={args.placeholder} />
    </Box>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  label: 'ニックネーム',
  placeholder: 'やまだ　たろう'
}
