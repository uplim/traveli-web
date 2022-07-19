import {
  collection,
  doc,
  getFirestore,
  setDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'

type Inputs = {
  title: string
  date: [Timestamp | null, Timestamp | null]
  thumbnail: string
  ownerName: string
  ownerIcon: string
  links: {
    category: string
    url: string
    label: string
  }[]
  canEdit: boolean
}

export const useCreateTravelink = async (data: Inputs, uid: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'travelinks'))

  await setDoc(ref, {
    ...data,
    id: ref.id,
    ownerId: uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })

  return ref.id
}
