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
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'

export const useSignInAnonymously = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()
  const setCurrentUser = useSetRecoilState(currentUserState)

  const signInAnonymouslyHandler = async () => {
    setDisabled.on()
    const auth = getAuth()
    try {
      const res = await signInAnonymously(auth)

      onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const db = getFirestore()
          const ref = doc(collection(db, 'users'), firebaseUser.uid)
          const document = await getDoc(ref)
          const isNewUser = getAdditionalUserInfo(res)?.isNewUser

          // 初回ログインで、かつuser作成済みの場合
          if (!isNewUser && document.exists()) {
            router.push('/home')
            return
          }

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
