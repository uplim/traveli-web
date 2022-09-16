import { doc, collection, getFirestore, setDoc } from 'firebase/firestore'
import { UserType } from '@/types/db'
import { toast } from 'react-toastify'

export const useCreateUser = async (user: UserType) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), user.uid)

  // フォームからユーザ生成する場合
  await setDoc(ref, {
    uid: user.uid,
    isAnonymous: user.isAnonymous,
    name: user.name,
    icon: user.icon
  })
}
