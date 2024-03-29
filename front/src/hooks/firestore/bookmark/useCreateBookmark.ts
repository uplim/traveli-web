import { TravelinkRequestType } from '@/types/db'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'

export const useCreateBookmark = async (
  uid: string,
  traveliId: string,
  data: TravelinkRequestType
) => {
  const db = getFirestore()
  const subColRef = doc(collection(db, 'users', uid, 'bookmarks'), traveliId)

  await setDoc(subColRef, {
    thumbnail: data.thumbnail ? data.thumbnail : null,
    date: data.date,
    title: data.title,
    id: data.id,
    ownerIcon: data.ownerIcon,
    ownerName: data.ownerName
  })
}
