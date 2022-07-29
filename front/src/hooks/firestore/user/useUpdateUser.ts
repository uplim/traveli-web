import { UserType } from '@/types/db'
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore'

export const useUpdateUser = async (
  data: Omit<UserType, 'uid' | 'isAnonymous'>,
  id: string
) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), id)

  try {
    console.log('a')

    await updateDoc(ref, data)
  } catch (e) {
    console.error(e)
  }
}
