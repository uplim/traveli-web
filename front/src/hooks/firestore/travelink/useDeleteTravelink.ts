import { collection, deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/router'

export const useDeleteTravelink = () => {
  const router = useRouter()

  const onClickDeleteTravelink = async (id: string) => {
    const db = getFirestore()

    const travelinkRef = doc(collection(db, 'travelinks'), id)
    try {
      await deleteDoc(travelinkRef)
    } catch (e) {
      console.error(e)
    }
    // TODO: リロード→ぐるぐるにしてDBから再フェッチ
    router.reload()
  }
  return { onClickDeleteTravelink }
}
