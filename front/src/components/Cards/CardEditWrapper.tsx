import React from 'react'
import { useState } from 'react'
import { TravelinkRequestType, Profile } from '@/types/db'
import { CardLink, CardEdit } from '@/components/Cards'

type CardEditWrapperProps = {
  // icon: string
  label: string
  url: string
  index: number
  formType: 'create' | 'update'
  travelinkData?: TravelinkRequestType
  ownerProfile?: Profile
  remove: () => void
}

export const CardEditWrapper = ({
  label,
  url,
  index,
  remove
}: CardEditWrapperProps) => {
  const [isMinimum, setState] = useState(false)
  const [currentLabel, setCurrentLabel] = useState(label)
  const [currentURL, setCurrentURL] = useState(url)

  return (
    <>
      {isMinimum ? (
        <CardLink
          label={currentLabel}
          url={currentURL}
          onClick={() => {
            setState(false)
            if (currentURL == currentLabel) setCurrentLabel('')
          }}
        />
      ) : (
        <CardEdit
          label={currentLabel}
          url={currentURL}
          index={index}
          formType={'create'}
          remove={() => {
            remove()
          }}
          setCurrentLabel={setCurrentLabel}
          setCurrentURL={setCurrentURL}
          setState={() => {
            setState(true)
          }}
        />
      )}
    </>
  )
}