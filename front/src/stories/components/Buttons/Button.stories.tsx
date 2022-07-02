import { Story, Meta } from '@storybook/react'
import type { ButtonProps } from '@chakra-ui/react'
import { Button } from '@/components/Buttons'

export default {
  title: 'components/Buttons/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args}>ぼたんだよ</Button>
  </>
)

export const Round = Template.bind({})
Round.args = {
  variant: 'round'
}
