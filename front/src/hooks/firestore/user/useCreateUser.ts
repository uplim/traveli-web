import { useRouter } from 'next/router'
import { User } from 'firebase/auth'
import {
  getDoc,
  doc,
  collection,
  getFirestore,
  setDoc
} from 'firebase/firestore'
import { UserType } from '@/types/db'

export const useCreateUser = () => {
  const router = useRouter()

  const createUser = async (user: User) => {
    const db = getFirestore()
    const usersCollection = collection(db, 'users')
    const userRef = doc(usersCollection, user.uid)
    const document = await getDoc(userRef)

    if (document.exists()) {
      const data = document.data() as UserType
      if (!data.name) router.push('/user')
      else router.push('/home')

      return
    }

    await setDoc(userRef, {
      uid: user.uid,
      isAnonymous: user.isAnonymous,
      // google認証しかないため、providerData[0]でok
      name: !user.isAnonymous ? user.providerData[0].displayName : '',
      icon: !user.isAnonymous ? user.providerData[0].photoURL : ''
    })
  }

  return { createUser }
}