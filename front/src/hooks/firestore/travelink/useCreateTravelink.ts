import {
  collection,
  doc,
  getFirestore,
  setDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'
import { toast } from 'react-toastify'

type Inputs = {
  title: string
  date: [Timestamp | null, Timestamp | null]
  thumbnail: string
  ownerName: string
  ownerIcon: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
}

export const useCreateTravelink = async (data: Inputs, uid: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'travelinks'))

  try {
    await setDoc(ref, {
      ...data,
      id: ref.id,
      ownerId: uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
  } catch {
    toast.error('トラベリンクの作成に失敗しました。')
  }

  return ref.id
}
