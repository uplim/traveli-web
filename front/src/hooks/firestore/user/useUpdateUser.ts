import { UserType } from '@/types/db'
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export const useUpdateUser = async (data: UserType) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users'), data.uid)

  try {
    await updateDoc(ref, data)
  } catch (e) {
    console.error(e)
    typeof e === 'string' && toast.error(e)
  }
}
