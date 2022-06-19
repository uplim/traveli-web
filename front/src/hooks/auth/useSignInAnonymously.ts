import { useRouter } from 'next/router'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'
import { useSetRecoilState } from 'recoil'
import { useBoolean } from '@chakra-ui/react'
import { CurrentUser } from '@/types/db'
import { currentUserState } from '@/recoil/atoms'

export const useSignInAnonymously = () => {
  const [disabled, setDisabled] = useBoolean()
  const router = useRouter()
  const setCurrentUser = useSetRecoilState(currentUserState)

  const createUserIfNotFound = async (user: CurrentUser) => {
    const db = getFirestore()
    const usersCollection = collection(db, 'users')
    const userRef = doc(usersCollection, user.uid)
    const document = await getDoc(userRef)
    if (document.exists()) return
    await setDoc(userRef, {
      uid: user.uid,
      isAnonymous: user.isAnonymous
    })
  }

  const onSubmit = async () => {
    const auth = getAuth()
    setDisabled.on()
    try {
      await signInAnonymously(auth)
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setCurrentUser({
            uid: currentUser.uid,
            isAnonymous: currentUser.isAnonymous
          })
          createUserIfNotFound(currentUser)
        } else {
          setCurrentUser(null)
        }
      })
      router.push('/home')
    } catch (err) {
      console.error(err)
      setDisabled.off()
    }
  }
  return { onSubmit, disabled }
}
