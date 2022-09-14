import { Story, Meta } from '@storybook/react'
import { RadioCategory } from '@/components/Radios'
import { Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'

export default {
  title: 'components/Radios/RadioCategory'
} as Meta

const Template: Story = () => {
  const { register } = useForm<Inputs>()

  return (
    <Box w={'100%'} bgColor={'base'}>
      <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
        <RadioCategory name={'title'} register={register} />
      </Box>
    </Box>
  )
}

export const Default = Template.bind({})
