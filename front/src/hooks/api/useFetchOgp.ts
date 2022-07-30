import { useEffect, useState } from 'react'

type OgpType = {
  title: string
  description: string
  image: string
  url: string
  site_name: string
  type: string
  locale: string
}

export const useFetchOgp = (url: string) => {
  const [ogp, setOgp] = useState<OgpType>()

  useEffect(() => {
    const loadOgp = async () => {
      try {
        const responce = await fetch(`/api/ogp?url=${url}`, {
          headers: {
            Accept: 'application/json'
          }
        })
        const json = (await responce.json()) as OgpType
        setOgp(json)
      } catch (e) {
        console.error(e)
      }
    }
    loadOgp()
  }, [url])

  return { ogp }
}
