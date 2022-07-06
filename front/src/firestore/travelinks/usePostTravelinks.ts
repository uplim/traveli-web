import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
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

export const usePostTravelinks = async (data: Inputs) => {
  const currentUser = useRecoilValue(currentUserState)

  if (!currentUser) return
  const db = getFirestore()
  const ref = doc(collection(db, 'travelinks'))
  await setDoc(ref, {
    ...data,
    id: ref.id,
    ownerId: currentUser.uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })

  return ref.id
}
