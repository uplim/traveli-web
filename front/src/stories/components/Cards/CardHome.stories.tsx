import { CardHome } from '@/components/Cards'
import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react'
import { BookmarkType } from '@/types/db'

export default {
  title: 'components/Cards/CardHome',
  component: CardHome
} as Meta

const Template: Story = () => {
  const data: BookmarkType = {
    title: '旅行',
    date: [null, null],
    id: '',
    ownerName: 'Piyo',
    ownerIcon: '/images/dummy.png',
    thumbnail: '/images/dummy.png'
  }

  return (
    <Box w={'100%'} bgColor={'base'}>
      <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
        <CardHome data={data} />
      </Box>
    </Box>
  )
}

export const Default = Template.bind({})
