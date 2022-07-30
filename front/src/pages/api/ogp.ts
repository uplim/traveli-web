// refference: https://github.com/jiri3/ogp-api (The Unlicense)

import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { JSDOM } from 'jsdom'

/**
 * OGPタグを取得して、そのcontentをJSON形式で返す.
 * 使用例:
 *    endpoint/api/ogp?url="サイトのURL"
 *
 * @param req HTTP request
 * @param res HTTP responce
 */

export default async function ogp(req: NextApiRequest, res: NextApiResponse) {
  const url = getUrlParameter(req)
  if (!url) {
    return
  }

  if (!url.match(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/)) {
    return
  }

  try {
    const responce = await axios.get(<string>url)
    const data = responce.data
    const dom = new JSDOM(data)
    const meta = dom.window.document.querySelectorAll('head > meta')

    // metaからOGPを抽出し、JSON形式に変換する
    const ogp = Array.from(meta)
      .filter((element) => element.hasAttribute('property'))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .reduce((pre: any, ogp) => {
        const property = ogp.getAttribute('property')?.trim().replace('og:', '')
        const content = ogp.getAttribute('content')
        pre[property ? property : ''] = content
        return pre
      }, {})
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
