import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'

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
      console.log('a')
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
        alert('リンク先のタイトルを取得できませんでした')
        return
      }
      setValue(`links.${index}.label`, json.title)
    } catch (e) {
      alert('リンク先のタイトルが取得できませんでした')
      console.error(e)
    } finally {
      setDisabled.off()
    }
  }

  return { ogp, searchOgp, disabled }
}
