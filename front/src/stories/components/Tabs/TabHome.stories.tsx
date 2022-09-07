import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react'
import { TabHome } from '@/components/Tabs'

export default {
  title: 'components/Tabs/TabHome'
} as Meta

const Template: Story = () => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <TabHome data={[]} bookmarkData={[]} />
    </Box>
  </Box>
)

export const Default = Template.bind({})
