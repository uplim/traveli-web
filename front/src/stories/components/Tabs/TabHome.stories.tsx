import { Story, Meta } from '@storybook/react'
import { TabHome } from '@/components/Tabs'
import { Layout } from '@/components/Layout'

export default {
  title: 'components/Tabs/TabHome',
  component: TabHome
} as Meta

const Template: Story = () => (
  <Layout>
    <TabHome data={[]} bookmarkData={[]} />
  </Layout>
)

export const Default = Template.bind({})
