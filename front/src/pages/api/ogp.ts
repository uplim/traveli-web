// refference: https://github.com/jiri3/ogp-api (The Unlicense)

import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { JSDOM } from 'jsdom'

export default async function ogp(req: NextApiRequest, res: NextApiResponse) {
  const url = getUrlParameter(req)

  if (!url) {
    return
  }

  try {
    const response = await axios.get(<string>url)

    const data = response.data
    const dom = new JSDOM(data)

    const title = dom.window.document.title
    const image = dom.window.document
      .querySelector("head > meta[property='og:image']")
      ?.getAttribute('content')

    const ogp = {
      title,
      image
    }

    res.status(200).json(ogp)
  } catch (e) {
    errorResponce(res)
  }
}

function isValidUrlParameter(url: string | string[]): boolean {
  return !(url == undefined || url == null || Array.isArray(url))
}

function getUrlParameter(req: NextApiRequest): string | null {
  const { url } = req.query
  if (isValidUrlParameter(url)) {
    return <string>url
  }
  return null
}

function errorResponce(res: NextApiResponse): void {
  res.status(400).send('error')
}
