import { collection, doc, getFirestore, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export const useDeleteBookmark = async (uid: string, traveliId: string) => {
  const db = getFirestore()
  const ref = doc(collection(db, 'users', uid, 'bookmarks'), traveliId)

  try {
    await deleteDoc(ref)
  } catch {
    toast.error('削除できませんでした。もう一度試してください。')
  }
}
