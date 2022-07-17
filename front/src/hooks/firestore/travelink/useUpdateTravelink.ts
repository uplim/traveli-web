import {
  collection,
  doc,
  getFirestore,
  updateDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'

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
  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp()
  })
}
