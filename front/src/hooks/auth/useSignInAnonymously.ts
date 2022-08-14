import { useRouter } from 'next/router'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { useBoolean } from '@chakra-ui/react'
import { currentUserState } from '@/recoil/atoms'

export const useSignInAnonymously = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()
  const setCurrentUser = useSetRecoilState(currentUserState)

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
            isAnonymous: currentUser.isAnonymous,
            name: '',
            icon: ''
          })
        } else {
          setCurrentUser(null)
        }
      })
      router.push('/user?first=true')
    } catch (err) {
      console.error(err)
      setDisabled.off()
    }
  }
  return { signInAnonymouslyHandler, disabled }
}
