import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { BookmarkType } from '@/types/db'

export const useGetBookmarkList = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [bookmarkList, setBookmarkList] = useState<BookmarkType[]>([])

  useEffect(() => {
    if (!currentUser) return

    const loadBookmarkList = async () => {
      const db = getFirestore()
      const ref = collection(db, 'users', currentUser.uid, 'bookmarks')
      const snapshot = await getDocs(ref)
      const getBookmarkList = snapshot.docs.map((doc) => {
        return doc.data() as BookmarkType
      })

      setBookmarkList(getBookmarkList)
    }

    loadBookmarkList()
  }, [])

  return { bookmarkList }
}
