import { Story, Meta } from '@storybook/react'
import { MenuCardLinkEdit } from '@/components/Menus/MenuCardLinkEdit'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/Menus/MenuCardLinkEdit'
} as Meta

const Template: Story = () => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <MenuCardLinkEdit setIsMinimum={() => {}} remove={() => {}} />
    </Box>
  </Box>
)

export const Default = Template.bind({})
