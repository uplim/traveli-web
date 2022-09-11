import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { toast } from 'react-toastify'

type OgpType = {
  title: string
  image?: string | null
}

export const useFetchOgp = (
  setValue: UseFormSetValue<Inputs>,
  index: number
) => {
  const [ogp, setOgp] = useState<OgpType>()
  const [disabled, setDisabled] = useBoolean()

  const searchOgp = async (url: string) => {
    setDisabled.on()
    if (!url) {
      alert('urlを入力してください')
      setDisabled.off()
      return
    }
    if (!url.match(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/)) {
      alert('urlが正しくありません')
      setDisabled.off()
      return
    }

    try {
      const responce = await fetch(`/api/ogp?url=${url}`, {
        headers: {
          Accept: 'application/json'
        }
      })
      const json = (await responce.json()) as OgpType
      setOgp(json)
      if (!json.title) {
        throw 'error'
      }
      setValue(`links.${index}.label`, json.title)
    } catch {
      toast.error('リンク先のタイトルを取得できませんでした')
    } finally {
      setDisabled.off()
    }
  }

  return { ogp, searchOgp, disabled }
}
