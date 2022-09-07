import { useBoolean } from '@chakra-ui/react'
import { useEffect } from 'react'

export const useLoadImage = (src: string) => {
  const [isLoading, setIsLoading] = useBoolean()

  useEffect(() => {
    setIsLoading.on()
    const image = new Image()

    image.onload = () => {
      setIsLoading.off()
    }

    image.src = src
  }, [])

  return { isLoading }
}
