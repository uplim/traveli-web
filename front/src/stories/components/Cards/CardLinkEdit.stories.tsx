import { Story, Meta } from '@storybook/react'
import { CardLinkEdit } from '@/components/Cards'
import { Box } from '@chakra-ui/react'
import { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { useForm } from 'react-hook-form'

export default {
  title: 'components/Cards/CardLinkEdit'
} as Meta

const Template: Story = () => {
  const { register, setValue } = useForm<Inputs>()

  return (
    <Box w={'100%'} bgColor={'base'}>
      <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
        <CardLinkEdit
          register={register}
          fields={[]}
          index={0}
          isClickNext={false}
          remove={() => void 0}
          currentLink={{
            url: '',
            label: '',
            category: 'その他'
          }}
          setIsClickNext={() => void 0}
          setValue={setValue}
        />
      </Box>
    </Box>
  )
}

export const Default = Template.bind({})
