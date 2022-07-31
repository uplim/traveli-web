import { useRouter } from 'next/router'
import {
  getAuth,
  GoogleAuthProvider,
  linkWithPopup,
  signInWithPopup
} from 'firebase/auth'
import { useRecoilState } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'
import { useCreateUser } from '@/hooks/firestore'

export const useSignInGoogle = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const { createUser } = useCreateUser()

  const signInGoogleHandler = async () => {
    setDisabled.on()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    // 匿名認証済みの時は、リンクさせる
    if (auth.currentUser) {
      await linkWithPopup(auth.currentUser, provider)
        .then((result) => {
          const user = result.user
          setCurrentUser({
            uid: user.uid,
            isAnonymous: user.isAnonymous
          })
        })
        .catch((err) => {
          console.error(err)
          setCurrentUser(null)
          setDisabled.off()
        })
    } else {
      await signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          setCurrentUser({
            uid: user.uid,
            isAnonymous: user.isAnonymous
          })
          createUser(user)
          router.push('/home')
        })
        .catch((err) => {
          console.error(err)
          setCurrentUser(null)
          setDisabled.off()
        })
    }
  }

  return { signInGoogleHandler, disabled, currentUser }
}
