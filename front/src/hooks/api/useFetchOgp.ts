import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'

type OgpType = {
  title: string
  description: string
  image: string
  url: string
  site_name: string
  type: string
  locale: string
}

export const useFetchOgp = () => {
  const [ogp, setOgp] = useState<OgpType>()
  const [disabled, setDisabled] = useBoolean()

  const onClickHandler = async (url: string) => {
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
    } catch (e) {
      alert('リンク先のタイトルが取得できませんでした。')
      console.error(e)
    } finally {
      setDisabled.off()
    }
  }

  return { ogp, onClickHandler, disabled }
}
