import { useRouter } from 'next/router'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { useBoolean } from '@chakra-ui/react'
import { currentUserState, historyState } from '@/recoil/atoms'
import { useCreateUser } from '@/hooks/firestore'

export const useSignInAnonymously = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()
  const setCurrentUser = useSetRecoilState(currentUserState)
  const setHistory = useSetRecoilState(historyState)

  const { createUser } = useCreateUser()

  const signInAnonymouslyHandler = async () => {
    setDisabled.on()
    const auth = getAuth()

    try {
      if (auth.currentUser) {
        router.push('/home')
        return
      }
      await signInAnonymously(auth)
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setCurrentUser({
            uid: currentUser.uid,
            isAnonymous: currentUser.isAnonymous
          })
          createUser(currentUser)
        } else {
          setCurrentUser(null)
        }
      })
      setHistory('/')
      router.push('/user')
    } catch (err) {
      console.error(err)
      setDisabled.off()
    }
  }
  return { signInAnonymouslyHandler, disabled }
}
