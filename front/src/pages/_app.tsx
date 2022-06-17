import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme'
import { Layout } from '@/components/Layout'
import '@/lib/firebase'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
