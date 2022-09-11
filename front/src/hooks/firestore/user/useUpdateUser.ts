import { UserType } from '@/types/db'
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore'

export const useUpdateUser = async (data: UserType) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), data.uid)

  try {
    await updateDoc(ref, data)
  } catch (e) {
    throw e
  }
}
