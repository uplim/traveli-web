import { TravelinkRequestType } from '@/types/db'
import {
  collection,
  doc,
  getFirestore,
  updateDoc,
  arrayUnion,
  getDoc,
  setDoc
} from 'firebase/firestore'

export const useUpdateBookmark = async (
  data: TravelinkRequestType,
  uid: string
) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'bookmark'), uid)
  const document = await getDoc(ref)

  if (document.exists()) {
    await updateDoc(ref, {
      saved: arrayUnion(data.id),
      items: arrayUnion({
        thumbnail: data.thumbnail,
        date: data.date,
        title: data.title,
        id: data.id,
        ownerIcon: data.ownerIcon,
        ownerName: data.ownerName
      })
    })
  } else {
    setDoc(ref, {
      saved: arrayUnion(data.id),
      items: arrayUnion({
        thumbnail: data.thumbnail,
        date: data.date,
        title: data.title,
        id: data.id,
        ownerIcon: data.ownerIcon,
        ownerName: data.ownerName
      })
    })
  }
}
