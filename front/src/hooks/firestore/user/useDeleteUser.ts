import {
  doc,
  getFirestore,
  deleteDoc,
  getDocs,
  collection,
  query,
  where
} from 'firebase/firestore'

export const useDeleteUser = () => {
  const onClickDeleteUser = async (id: string) => {
    const db = getFirestore()

    const usersRef = doc(collection(db, 'users'), id)

    const q = query(collection(db, 'travelinks'), where('ownerId', '==', id))
    const travelinkDocs = await getDocs(q)

    try {
      await deleteDoc(usersRef)
      console.log('削除！')
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
  }

  return { onClickDeleteUser }
}
