import { currentUserState } from '@/recoil/atoms'
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
import { useRecoilValue } from 'recoil'

export const useUpdateBookmark = async (data: TravelinkRequestType) => {
  const currentUser = useRecoilValue(currentUserState)
  if (!currentUser) return
  const db = getFirestore()
  const ref = doc(collection(db, 'bookmark'), currentUser.uid)
  const document = await getDoc(ref)

  if (document.exists()) {
    await updateDoc(ref, {
      items: arrayUnion({
        thumbnail: data.thumbnail,
        date: data.date,
        title: data.title,
        id: data.id
      })
    })
  } else {
    setDoc(ref, {
      items: arrayUnion({
        thumbnail: data.thumbnail,
        date: data.date,
        title: data.title,
        id: data.id
      })
    })
  }
}
