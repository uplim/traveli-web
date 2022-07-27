import { TravelinkRequestType } from '@/types/db'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'

export const useCreateBookmark = async (
  uid: string,
  traveliId: string,
  data: TravelinkRequestType
) => {
  const db = getFirestore()
  const subColRef = doc(collection(db, 'profiles', uid, 'bookmark'), traveliId)

  try {
    await setDoc(subColRef, data)
  } catch {
    console.error('保存できませんでした')
  }
}
