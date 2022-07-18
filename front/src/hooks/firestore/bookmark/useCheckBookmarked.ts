import { useEffect } from 'react'
import { BookmarkType } from '@/types/db'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const useCheckBookmarked = () => {
  const router = useRouter()
  const [isChecked, setIsChecked] = useBoolean()
  const traveliId = router.query.traveliId as string
  const currentUser = useRecoilValue(currentUserState)

  useEffect(() => {
    if (!currentUser) return

    const loadTravelink = async () => {
      const db = getFirestore()
      const ref = doc(collection(db, 'bookmark'), currentUser.uid)
      const document = await getDoc(ref)

      if (!document.exists()) {
        return
      }

      const data = document.data() as BookmarkType
      const isSaved = data.saved.indexOf(traveliId)
      isSaved !== -1 ? setIsChecked.on() : setIsChecked.off()
    }

    loadTravelink()
  }, [])

  return { isChecked }
}
