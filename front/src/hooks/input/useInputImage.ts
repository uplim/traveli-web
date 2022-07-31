import { useRef } from 'react'

export const useInputImage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickImage = () => {
    inputRef.current?.click()
  }

  return { inputRef, onClickImage }
}
