import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import DatePicker from 'react-datepicker'

type Props<T> = {
  name: Path<T>
  control: Control<T>
}

export const InputDate = <T,>({ name, control }: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = [null, null] } }) => {
        const v = value as [Date | null, Date | null]
        return (
          <DatePicker
            selectsRange={true}
            dateFormat={'yyyy/MM/dd'}
            onChange={onChange}
            startDate={v[0]}
            endDate={v[1]}
            withPortal
          />
        )
      }}
    />
  )
}
