import React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme'
import { Layout } from '@/components/Layout'
import { CheckAuth } from '@/components/Auth'
import '@/lib/firebase'
import '@/components/Inputs/date-picker.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <CheckAuth>
            <Component {...pageProps} />
          </CheckAuth>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default App
