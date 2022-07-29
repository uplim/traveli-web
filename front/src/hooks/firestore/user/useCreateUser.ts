import { useRouter } from 'next/router'
import { User } from 'firebase/auth'
import {
  getDoc,
  doc,
  collection,
  getFirestore,
  setDoc
} from 'firebase/firestore'

export const useCreateUser =  () => {
  const router = useRouter()


  const createUser = async (user: User) => {
    const db = getFirestore()
    const usersCollection = collection(db, 'users')
    const userRef = doc(usersCollection, user.uid)
    const document = await getDoc(userRef)
  
    if (document.exists()) router.push('/home')
  
    await setDoc(userRef, {
      uid: user.uid,
      isAnonymous: user.isAnonymous
    })
  }

  return { createUser }
}
