import { Story, Meta } from '@storybook/react'
import { Sidebar } from '@/components/Sidebars'
import { Layout } from '@/components/Layout'

export default {
  title: 'components/Sidebars/Sidebar'
} as Meta
const Template: Story = (args) => {
  return (
    <Layout>
      <Sidebar
        isOpen={true}
        onClose={() => {}}
        icon={'/images/dummy.png'}
        name={args.name}
      />
    </Layout>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'とらべり　太郎'
}
