import { useRouter } from 'next/router'
import {
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  signInAnonymously
} from 'firebase/auth'
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
      const res = await signInAnonymously(auth)

      // 初回ログインかどうか
      const isNewUser = getAdditionalUserInfo(res)?.isNewUser
      if (!isNewUser) {
        router.push('/home')
        return
      }

      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setCurrentUser({
            uid: firebaseUser.uid,
            isAnonymous: firebaseUser.isAnonymous,
            name: '',
            icon: ''
          })
        } else {
          setCurrentUser(null)
        }
      })
      router.push('/user?isFirst=true')
    } catch (err) {
      console.error(err)
      setDisabled.off()
    }
  }
  return { signInAnonymouslyHandler, disabled }
}
