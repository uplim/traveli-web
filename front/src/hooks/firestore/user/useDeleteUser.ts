import {
  doc,
  getFirestore,
  deleteDoc,
  getDocs,
  collection,
  query,
  where
} from 'firebase/firestore'
import { useRouter } from 'next/router'

export const useDeleteUser = () => {
  const router = useRouter()
  const onClickDeleteUser = async (id: string) => {
    const db = getFirestore()

    const usersRef = doc(collection(db, 'users'), id)

    const q = query(collection(db, 'travelinks'), where('ownerId', '==', id))
    const travelinkDocs = await getDocs(q)

    try {
      await deleteDoc(usersRef)
    } catch (e) {
      console.error(e)
    }

    try {
      travelinkDocs.forEach(async (travelinkDoc) => {
        const travelinkRef = doc(
          collection(db, 'travelinks'),
          travelinkDoc.data().id
        )
        await deleteDoc(travelinkRef)
      })
    } catch (e) {
      console.error(e)
    }
    router.push('/goodbye')
  }

  return { onClickDeleteUser }
}
