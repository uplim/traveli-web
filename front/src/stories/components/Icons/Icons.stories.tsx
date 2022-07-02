import { Story, Meta } from '@storybook/react'
import { Box, Text, Flex } from '@chakra-ui/react'
import {
  IconCamera,
  IconEdit,
  IconHelp,
  IconLink,
  IconMenu,
  IconPlus,
  IconQr,
  IconReturn,
  IconSave,
  IconShare,
  IconSignOut,
  IconUser,
  IconViewGrid,
  IconViewList
} from '@/components/Icons'

export default {
  title: 'utility/Icons'
} as Meta

const icons = [
  { Components: IconCamera, text: 'IconCamera' },
  { Components: IconEdit, text: 'IconEdit' },
  { Components: IconHelp, text: 'Iconhelp' },
  { Components: IconLink, text: 'IconLink' },
  { Components: IconMenu, text: 'IconMenu' },
  { Components: IconPlus, text: 'IconPlus' },
  { Components: IconQr, text: 'IconQr' },
  { Components: IconReturn, text: 'IconReturn' },
  { Components: IconSave, text: 'IconSave' },
  { Components: IconShare, text: 'IconChare' },
  { Components: IconSignOut, text: 'IconSignOut' },
  { Components: IconUser, text: 'IconUser' },
  { Components: IconViewList, text: 'IconViewList' },
  { Components: IconViewGrid, text: 'IconGrid' }
]

const Template: Story = ({ ...args }) => (
  <Flex maxW={'50rem'} flexWrap={'wrap'}>
    {icons.map(({ Components, text }, index) => (
      <Box key={index} textAlign={'center'} w={'10rem'} mt={'2rem'}>
        <Components
          h={'4rem'}
          w={'4rem'}
          color={args.color}
          display={'inline-block'}
        />
        <Text>{text}</Text>
      </Box>
    ))}
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  color: 'logoBlack'
}
