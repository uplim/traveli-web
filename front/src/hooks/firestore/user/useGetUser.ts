import { useEffect, useState } from 'react'
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { UserType } from '@/types/db'
import { useRouter } from 'next/router'

export const useGetUser = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [user, setUser] = useState<UserType | null>(null)
  const router = useRouter()
  const { isFirst } = router.query

  useEffect(() => {
    if (!currentUser) return

    const loadUser = async () => {
      const db = getFirestore()
      const ref = doc(collection(db, 'users'), currentUser.uid)
      const document = await getDoc(ref)

      if (!document.exists()) {
        // ユーザ未作成時は/user?isFirst=true以外アクセスできない
        if (!isFirst) {
          router.push('/user?isFirst=true')
          // topから認証済み、ユーザ未作成で遷移した時にチラ見えするの防止
          if (router.pathname === '/home') return
        }

        setUser({
          uid: currentUser.uid,
          isAnonymous: true,
          icon: '',
          name: ''
        })
        return
      } 

      // ユーザ作成済みだけど初回フラグがtrueの時
      if (isFirst) router.push('/user')

      const getUser = document.data() as UserType

      setUser(getUser)
    }

    loadUser()
  }, [])

  return { user, currentUser }
}
