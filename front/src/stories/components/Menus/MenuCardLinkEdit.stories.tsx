import { Story, Meta } from '@storybook/react'
import { MenuCardLinkEdit } from '@/components/Menus/MenuCardLinkEdit'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/Menus/MenuLinkCardEdit',
  component: MenuCardLinkEdit
} as Meta

const Template: Story = () => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <MenuCardLinkEdit setIsMinimum={() => void 0} remove={() => void 0} />
    </Box>
  </Box>
)

export const Default = Template.bind({})
