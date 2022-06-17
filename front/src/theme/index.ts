import { extendTheme } from '@chakra-ui/react'
import { colors } from '@/theme/colors'
import { fontSizes } from '@/theme/font-sizes'
import { sizes } from '@/theme/sizes'

export const customTheme = extendTheme({
  fonts: {
    body: `sans-serif`,
    heading: `sans-serif`
  },
  colors: colors,
  fontSizes: fontSizes,
  sizes: sizes,
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        fontFamily: 'body',
        lineHeight: 'base',
        fontSize: 'sm'
      },
      a: {
        cursor: 'pointer'
      }
    }
  }
})
