import { Story, Meta } from '@storybook/react'
import { ModalQrCode } from '@/components/Modals'
import { Box } from '@chakra-ui/react'

export default {
  title: 'components/Modals/ModalQrCode',
  component: ModalQrCode
} as Meta

const Template: Story = (args) => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} maxW={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <ModalQrCode
        thumbnail={''}
        title={args.title}
        date={[null, null]}
        path={''}
        isOpen={true}
        onClose={() => void 0}
      />
    </Box>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  title: '旅行'
}
