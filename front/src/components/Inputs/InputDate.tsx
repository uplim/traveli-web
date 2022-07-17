import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

type Props<T> = {
  name: Path<T>
  error?: string
  control: Control<T>
  timeIntervals?: number
}

export const InputDate = <T,>({ name, control }: Props<T>) => {
  
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null])
  const [startDate, endDate] = dateRange

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update)
      }}
      withPortal
    />
  )
}
