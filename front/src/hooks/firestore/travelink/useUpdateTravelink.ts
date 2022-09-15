import {
  collection,
  doc,
  getFirestore,
  updateDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'
import { toast } from 'react-toastify'

type Inputs = Partial<{
  title: string
  date: [Timestamp | null, Timestamp | null]
  thumbnail: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
}>

export const useUpdateTravelink = async (data: Inputs, id: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'travelinks'), id)
  try {
    await updateDoc(ref, {
      ...data,
      updatedAt: serverTimestamp()
    })
  } catch {
    toast.error('変更内容の保存に失敗しました。')
  }
}
