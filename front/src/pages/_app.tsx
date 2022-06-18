import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme'
import { Layout } from '@/components/Layout'
import '@/lib/firebase'
import { currentUserState } from '@/recoil/atoms'

const AppInit = () => {
  const setCurrentUser = useSetRecoilState(currentUserState)
  const router = useRouter()

  const checkAuth = async () => {
    try {
      const auth = getAuth()
      await onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setCurrentUser({
            uid: currentUser.uid,
            isAnonymous: currentUser.isAnonymous
          })
        } else {
          setCurrentUser(null)
          router.push('/')
        }
      })
    } catch {
      setCurrentUser(null)
      await router.push('/')
    }
  }

  useEffect(() => {
    // 認証不要ページで認証確認しない
    if (router.pathname === '/') return
    if (router.pathname === '/signin') return
    if (router.pathname === '/signup') return

    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  return null
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
          <AppInit />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default App
