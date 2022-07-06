import { useFieldArray, useForm } from 'react-hook-form'

type Inputs = {
  links: {
    url: string
    label: string
  }[]
}

export const useFormCreateLinks = () => {
  const { register, control, handleSubmit } = useForm<Inputs>()

  const { fields, append } = useFieldArray({
    name: 'links',
    control: control
  })

  const onSubmit = (data: Inputs) => {
    console.log(data)

    return {}
  }

  return {
    register,
    handleSubmit,
    fields,
    append,
    onSubmit
  }
}
