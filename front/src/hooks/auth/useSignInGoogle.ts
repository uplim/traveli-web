import { useRouter } from 'next/router'
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  linkWithPopup,
  onAuthStateChanged,
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
  const createUser = useCreateUser

  const signInGoogleHandler = async () => {
    setDisabled.on()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    // 匿名認証済みの時は、リンクさせる
    if (auth.currentUser) {
      await linkWithPopup(auth.currentUser, provider)
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setCurrentUser({
            uid: currentUser.uid,
            isAnonymous: currentUser.isAnonymous
          })
        } else {
          setCurrentUser(null)
        }
        router.push('/home')
      })
    } else {
      const res = await signInWithPopup(auth, provider)
      const isNewUser = getAdditionalUserInfo(res)?.isNewUser
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          if (isNewUser) {
            const userData = {
              uid: currentUser.uid,
              isAnonymous: currentUser.isAnonymous,
              name: currentUser.providerData[0].displayName ?? '',
              icon: currentUser.providerData[0].photoURL ?? ''
            }
            createUser(userData)
            setCurrentUser(userData)
          }
        } else {
          setCurrentUser(null)
        }
        router.push('/home')
      })
    }
  }

  return { signInGoogleHandler, disabled, currentUser }
}
