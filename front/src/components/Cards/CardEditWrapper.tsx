import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'
import { TravelinkRequestType, Profile, CategoryType } from '@/types/db'
import { CardLink, CardEdit } from '@/components/Cards'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'

type CardEditWrapperProps = {
  // icon: string
  label: string
  url: string
  index: number
  travelinkData?: TravelinkRequestType
  ownerProfile?: Profile
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
}

export const CardEditWrapper = ({
  label,
  index,
  remove,
  register,
  errors,
  setCategories,
  categories
}: CardEditWrapperProps) => {
  const [isMinimum, setIsMinimum] = useState(false)
  const [currentLabel, setCurrentLabel] = useState(label)

  return (
    <>
      {isMinimum ? (
        <CardLink
          label={currentLabel}
          setIsMinimum={setIsMinimum}
          errors={errors}
          index={index}
        />
      ) : (
        <CardEdit
          label={currentLabel}
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
