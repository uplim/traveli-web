import { Story, Meta } from '@storybook/react'
import { MenuCardLinkEdit } from '@/components/Menus/MenuCardLinkEdit'
import { Box } from '@chakra-ui/react'
import { SetStateAction } from 'react'

export default {
  title: 'components/Menus/MenuLinkCardEdit'
} as Meta

const Template: Story = () => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <MenuCardLinkEdit setIsMinimum={function (value: SetStateAction<boolean>): void {
        
      } } remove={function (): void {
        
      } } />
    </Box>
  </Box>
)

export const Default = Template.bind({})
