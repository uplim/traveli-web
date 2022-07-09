import {
  collection,
  doc,
  getFirestore,
  setDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore'
import { useGetOwnerProfile } from './useGetOwnerProfile'

type Inputs = {
  title: string
  date: string
  thumbnail: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
}

export const useCreateTravelink = async (data: Inputs, uid: string) => {
  const ownerProfile = useGetOwnerProfile(uid)
  if (!ownerProfile) return
  const db = getFirestore()
  const ref = doc(collection(db, 'travelinks'))

  await setDoc(ref, {
    ...data,
    id: ref.id,
    ownerId: uid,
    ...ownerProfile,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })

  return ref.id
}
