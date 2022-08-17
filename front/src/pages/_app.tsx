import React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme'
import { Layout } from '@/components/Layout'
import '@/lib/firebase'
import { UseCheckAuth } from '@/hooks/auth/useCheckAuth'
import '@/components/Inputs/date-picker.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <UseCheckAuth>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={true}
              closeButton={false}
            />
            <Component {...pageProps} />
          </UseCheckAuth>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default App
