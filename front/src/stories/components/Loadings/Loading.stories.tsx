import { Story, Meta } from '@storybook/react'
import { Loading } from '@/components/Loadings'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/Loadings/Loading'
} as Meta

const Template: Story = () => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <Loading />
    </Box>
  </Box>
)

export const Default = Template.bind({})
