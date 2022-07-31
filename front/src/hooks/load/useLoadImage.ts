import { useState, useEffect } from 'react'

export const useLoadImage = (src: string) => {
  const [isLoad, setIsLoad] = useState<boolean>(false)

  useEffect(() => {
    setIsLoad(false)

    const image = new Image()

    image.onload = () => {
      setIsLoad(true)
    }

    image.src = src
  }, [])

  return { isLoad, setIsLoad }
}
