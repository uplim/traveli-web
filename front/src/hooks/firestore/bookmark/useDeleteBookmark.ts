import {
  collection,
  doc,
  getFirestore,
  deleteDoc
} from 'firebase/firestore'

export const useDeleteBookmark = async (uid: string, traveliId: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'profiles', uid, 'bookmarks'), traveliId)

  try {
    await deleteDoc(ref)
  } catch {
    console.error('削除できませんでした')
  }
}
