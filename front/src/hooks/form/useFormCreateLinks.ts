import { useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Inputs = {
  title: string
  date: string
  links: {
    url: string
    label: string
  }[]
}

const schema = yup.object({
  title: yup.string().required('旅の名前を入力してください'),
  date: yup
    .string()
    .matches(/^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/, {
      message: 'yyyy/mm/ddの形式で入力してください(ex: 2022/06/21)'
    }),
  links: yup.array().of(
    yup.object().shape({
      url: yup
        .string()
        .required('urlを入力してください')
        // urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
          message: '利用可能なURLを入力してください'
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
