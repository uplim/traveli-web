import { CardLink } from '@/components/Cards'
import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'components/Cards/CardLink'
} as Meta

const Template: Story = ({ category }) => (
  <Box w={'100%'} bgColor={'base'}>
    <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
      <CardLink label={'カードリンク'} category={category} />
    </Box>
  </Box>
)

export const Others = Template.bind({})
Others.args = {
  category: 'その他'
}

export const Food = Template.bind({})
Food.args = {
  category: '食事'
}
export const Place = Template.bind({})
Place.args = {
  category: '場所'
}
