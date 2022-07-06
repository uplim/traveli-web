import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Inputs = {
  links: {
    url: string
    label: string
  }[]
}

const schema = yup.object({
  links: yup.array().of(
    yup.object().shape({
      url: yup
        .string()
        .required('urlを入力してください')
        // urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
          messages: '利用可能なURLを入力してください'
        }),
      label: yup.string()
    })
  )
})

export const useFormCreateLinks = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

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
    onSubmit,
    errors
  }
}
