import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { UseFormRegister, FieldError, UseFormSetValue } from 'react-hook-form'
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
  setValue: UseFormSetValue<Inputs>
}

export const CardEditWrapper = ({
  label,
  index,
  url,
  remove,
  register,
  errors,
  setCategories,
  categories,
  setIsClickNext,
  isClickNext,
  isLast,
  setValue
}: CardEditWrapperProps) => {
  const [isMinimum, setIsMinimum] = useState(false)
  const [currentLabel, setCurrentLabel] = useState(label)
  const [currentUrl, setCurrentUrl] = useState<string>(url)

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
          errors={errors ? errors[index] : undefined}
          category={categories[index]}
        />
      ) : (
        <CardEdit
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
          index={index}
          setValue={setValue}
          register={register}
          errors={errors}
          url={url}
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
