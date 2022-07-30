import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'
import { CategoryType } from '@/types/db'
import { CardLink, CardEdit } from '@/components/Cards'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'

type CardEditWrapperProps = {
  // icon: string
  label: string
  url: string
  index: number
  register: UseFormRegister<Inputs>
  errors?:
    | {
        url?: FieldError | undefined
        label?: FieldError | undefined
      }[]
    | undefined
  remove: () => void
  categories: CategoryType[]
  setCategories: Dispatch<SetStateAction<CategoryType[]>>
  setIsClickNext: Dispatch<SetStateAction<boolean>>
  isClickNext: boolean
  isLast: boolean
}

export const CardEditWrapper = ({
  label,
  index,
  remove,
  register,
  errors,
  setCategories,
  categories,
  setIsClickNext,
  isClickNext,
  isLast
}: CardEditWrapperProps) => {
  const [isMinimum, setIsMinimum] = useState(false)
  const [currentLabel, setCurrentLabel] = useState(label)

  // 次へを押された時、最後の要素以外は最小化する
  if (isClickNext && !isMinimum && !isLast) {
    setIsMinimum(true)
  }

  return (
    <>
      {isMinimum ? (
        <CardLink
          label={currentLabel}
          setIsClickNext={setIsClickNext}
          setIsMinimum={setIsMinimum}
          errors={errors}
          index={index}
        />
      ) : (
        <CardEdit
          index={index}
          register={register}
          errors={errors}
          remove={() => {
            remove()
          }}
          setCurrentLabel={setCurrentLabel}
          setIsMinimum={setIsMinimum}
          categories={categories}
          setCategories={setCategories}
        />
      )}
    </>
  )
}
