import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Loading } from '@/components/Loadings'
import { useBoolean } from '@chakra-ui/react'

type UseCheckAuthProps = {
  children: React.ReactNode
}

const accessibleBeforeSignInPages = ['/signin', '/signup', '/404']

export const UseCheckAuth = ({ children }: UseCheckAuthProps) => {
  const [isLoading, setIsLoading] = useBoolean()
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const router = useRouter()

  const isAccessibleBeforeSignIn = accessibleBeforeSignInPages.includes(
    router.pathname
  )

  const checkAuth = async () => {
    // ログインなしでアクセス可能なページには認証チェックしない
    if (isAccessibleBeforeSignIn) return
    try {
      setIsLoading.on()
      const auth = getAuth()
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          if (router.pathname === '/') {
            router.push('/home')
            return
          }
          setCurrentUser({
            uid: currentUser.uid,
            isAnonymous: currentUser.isAnonymous
          })
        } else {
          // ログアウト
          router.push('/')
          setCurrentUser(null)
        }
      })
      setIsLoading.off()
    } catch {
      await router.push('/')
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    checkAuth()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  const isLogout = !currentUser && router.pathname === '/'
  const isLogin = !!currentUser

  return (
    <>
      {isAccessibleBeforeSignIn || (isLogin && !isLoading) || isLogout ? (
        <>{children}</>
      ) : (
        <Loading />
      )}
    </>
  )
}
