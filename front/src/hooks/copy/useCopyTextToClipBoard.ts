import { useState } from 'react'
import { useBoolean } from '@chakra-ui/react'

export const useCopyTextToClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false)
  const [disabled, setDisabled] = useBoolean()

  const copyTextToClipboard = (text: string) => {
    setDisabled.on()
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true)
        setDisabled.off()
        setTimeout(() => {
          setCopied(false)
        }, 1000)
      })
      .catch(() => {
        setCopied(false)
        setDisabled.off()
      })
  }
  return {
    copied,
    disabled,
    copyTextToClipboard
  }
}
