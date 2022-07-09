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
        '& p, & span, & dl, & form': {
          transform: 'rotate(0.03deg)'
        }
      },
      'h1,h2,h3,h4,h5,h6,button,input,textarea,a,label,div': {
        transform: 'rotate(0.03deg)',
        cursor: 'pointer'
      }
    }
  },
  components: {
    Button
  }
})
