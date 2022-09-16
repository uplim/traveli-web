import { UserType } from '@/types/db'
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export const useUpdateUser = async (data: UserType) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), data.uid)

  await updateDoc(ref, data)
}
