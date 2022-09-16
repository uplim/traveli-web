import { collection, doc, getFirestore, deleteDoc } from 'firebase/firestore'

export const useDeleteBookmark = async (uid: string, traveliId: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users', uid, 'bookmarks'), traveliId)

  await deleteDoc(ref)
}
