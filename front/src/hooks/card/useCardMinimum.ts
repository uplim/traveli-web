import { useBoolean } from '@chakra-ui/react'

export const useCardMinumum = () => {
  const [minimum, setMinimum] = useBoolean()

  return [minimum, setMinimum]
}
