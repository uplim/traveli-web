import { User } from 'firebase/auth'
import { doc, collection, getFirestore, setDoc } from 'firebase/firestore'
import { UserType } from '@/types/db'

export const useCreateUser = async (user: User | UserType) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), user.uid)

  await setDoc(ref, {
    uid: user.uid,
    isAnonymous: user.isAnonymous,
    // google認証しかないため、providerData[0]でok
    name: !user.isAnonymous ? user.providerData[0].displayName : '',
    icon: !user.isAnonymous ? user.providerData[0].photoURL : ''
  })
}
