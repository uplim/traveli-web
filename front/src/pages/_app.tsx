import React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme'
import { Layout } from '@/components/Layout'
import { CheckAuth } from '@/components/Auth'
import { DefaultSeo } from '@/components/SEOs'
import '@/lib/firebase'
import '@/components/Inputs/date-picker.css'
import '@/components/Toasts/baseToastContainer.css'
import 'react-toastify/dist/ReactToastify.css'
import { BaseToastContainer } from '@/components/Toasts'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <DefaultSeo />
        <Layout>
          <CheckAuth>
            <BaseToastContainer />
            <Component {...pageProps} />
          </CheckAuth>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default App
