import { Story, Meta } from '@storybook/react'
import { CardLinkEdit } from '@/components/Cards'
import { Box } from '@chakra-ui/react'
import { CardLink } from '@/components/Cards'
import { SetStateAction } from 'react'
import { Inputs } from '@/hooks/form/useFormCreateUpdateLinks';
import { useForm } from 'react-hook-form'

export default {
  title: 'components/Cards/CardLinkEdit'
} as Meta

const Template: Story = (args) => {
    const {register} = useForm<Inputs>()
    const {setValue} = useForm<Inputs>()
  return (
    <Box w={'100%'} bgColor={'base'}>
      <Box as={'main'} w={'container.sm'} p={'1.6rem'} h={'100vh'}>
        <CardLinkEdit
          register={register}
          fields={[]}
          index={0}
          isClickNext={false}
          remove={function (index?: number | number[] | undefined): void {}}
          currentLink={{
            url: '',
            label: '',
            category: 'その他'
          }}
          setIsClickNext={function (value: SetStateAction<boolean>): void {}}
          setValue={setValue}
        />
      </Box>
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  // register:,
  // fields:,
  // index:,
  // isClickNext:,
  // remove:,
  // currentLink: {
  //     url:'',
  //     label:'',
  //     category: ''
  // },
  // setIsClickNext:,
  // setValue:
}
