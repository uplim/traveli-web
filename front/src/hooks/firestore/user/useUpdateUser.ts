import { UserType } from '@/types/db'
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore'

export const useUpdateUser = async (data: Partial<UserType>, id: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), id)

  try {
    await updateDoc(ref, data)
  } catch (e) {
    console.error(e)
  }
}