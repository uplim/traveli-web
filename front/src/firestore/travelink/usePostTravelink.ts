import {
  collection,
  doc,
  getFirestore,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'

type Inputs = {
  title: string
  date: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
}

export const usePostTravelink = async (data: Inputs, uid: string) => {
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
