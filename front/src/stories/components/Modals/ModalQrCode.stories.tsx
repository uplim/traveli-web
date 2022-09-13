import { Story, Meta } from '@storybook/react'
import { ModalQrCode } from '@/components/Modals'
import { Layout } from '@/components/Layout'

export default {
  title: 'components/Modals/Modal'
} as Meta

const Template: Story = (args) => (
  <Layout>
    <ModalQrCode
      thumbnail={''}
      title={args.title}
      date={[null, null]}
      path={''}
      isOpen={true}
      onClose={() => {}}
    />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {
  title: '旅行'
}
