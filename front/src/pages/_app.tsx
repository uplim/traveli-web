import React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme'
import { Layout } from '@/components/Layout'
import '@/lib/firebase'
import { UseCheckAuth } from '@/hooks/auth/useCheckAuth'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <UseCheckAuth>
            <Component {...pageProps} />
          </UseCheckAuth>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default App
