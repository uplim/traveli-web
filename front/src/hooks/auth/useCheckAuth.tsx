import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Loading } from '@/components/Loadings'
import { toast } from 'react-toastify'

type UseCheckAuthProps = {
  children: React.ReactNode
}

const accessibleBeforeSignInPages = ['/', '/signin', '/signup', '/404']

export const UseCheckAuth = ({ children }: UseCheckAuthProps) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const router = useRouter()

  const isAccessibleBeforeSignIn = accessibleBeforeSignInPages.includes(
    router.pathname
  )

  const checkAuth = async () => {
    // ログインなしでアクセス可能なページには認証チェックしない
    if (isAccessibleBeforeSignIn) return
    try {
      const auth = getAuth()
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setCurrentUser({
            uid: currentUser.uid,
            isAnonymous: currentUser.isAnonymous
          })
        } else {
          router.push('/')
          setCurrentUser(null)
        }
      })

    } catch(e) {
      typeof e === 'string' && toast.error(e)
      await router.push('/')
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    checkAuth()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  return (
    <>
      {isAccessibleBeforeSignIn || currentUser ? <>{children}</> : <Loading />}
    </>
  )
}
