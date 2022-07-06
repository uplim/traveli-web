import { extendTheme } from '@chakra-ui/react'
import { colors } from '@/theme/colors'
import { fontSizes } from '@/theme/font-sizes'
import { sizes } from '@/theme/sizes'
import { Button } from '@/theme/button'

export const customTheme = extendTheme({
  fonts: {
    body: `'M PLUS 1p', sans-serif`,
    heading: `'M PLUS 1p', sans-serif`
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
        fontSize: 'sm',
        transform: 'rotate(0.05deg)'
      },
      a: {
        cursor: 'pointer'
      }
    }
  },
  components: {
    Button
  }
})
