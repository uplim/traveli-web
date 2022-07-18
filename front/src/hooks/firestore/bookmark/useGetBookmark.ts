import { useEffect, useState } from 'react'
import { BookmarkType } from '@/types/db'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'

export const useGetBookmark = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [bookmark, setBookmark] = useState<BookmarkType>({ items: [] })
  const [bookmarkExists, setBookmarkExists] = useBoolean()

  useEffect(() => {
    if (!currentUser) return

    const loadTravelink = async () => {
      const db = getFirestore()
      const ref = doc(collection(db, 'bookmark'), currentUser.uid)
      const document = await getDoc(ref)

      if (!document.exists()) {
        setBookmarkExists.off()
        return
      }

      const getBookmark = document.data() as BookmarkType
      setBookmark(getBookmark)
      setBookmarkExists.on()
    }

    loadTravelink()
  }, [])

  return { bookmark, bookmarkExists }
}
