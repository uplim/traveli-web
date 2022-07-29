import { useEffect } from 'react'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const useCheckBookmarked = () => {
  const router = useRouter()
  const [isBookmarked, setIsBookmarked] = useBoolean()
  const traveliId = router.query.traveliId as string
  const currentUser = useRecoilValue(currentUserState)

  useEffect(() => {
    if (!currentUser) return

    const loadBookmark = async () => {
      const db = getFirestore()
      const ref = doc(
        collection(db, 'profiles', currentUser.uid, 'bookmarks'),
        traveliId
      )
      const document = await getDoc(ref)

      document.exists() ? setIsBookmarked.on() : setIsBookmarked.off()
    }

    loadBookmark()
  }, [])

  return { isBookmarked, setIsBookmarked }
}
