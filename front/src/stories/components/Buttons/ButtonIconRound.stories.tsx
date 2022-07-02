import { Story, Meta } from '@storybook/react'
import { ButtonIconRound } from '@/components/Buttons'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/buttons/buttonIconRound',
  component: ButtonIconRound
} as Meta

const Template: Story = ({ iconType }) => (
  <Box bgColor={'base'} w={'100%'} h={'100vh'} pt={'1rem'} pl={'1rem'}>
    <ButtonIconRound iconType={iconType} />
  </Box>
)

export const Return = Template.bind({})
Return.args = {
  iconType: 'return'
}

export const Menu = Template.bind({})
Menu.args = {
  iconType: 'menu'
}

export const Edit = Template.bind({})
Edit.args = {
  iconType: 'edit'
}

export const Plus = Template.bind({})
Plus.args = {
  iconType: 'plus'
}
