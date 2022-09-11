import { Story, Meta } from '@storybook/react'
import { Sidebar } from '@/components/Sidebars'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/Sidebars/Sidebar'
} as Meta
const Template: Story = (args) => {
  return (
    <Box w={'100%'} bgColor={'base'}>
      <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
        <Sidebar
          isOpen={true}
          onClose={() => {}}
          icon={'/images/dummy.png'}
          name={args.name}
        />
      </Box>
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'とらべり　太郎'
}
