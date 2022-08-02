import { useEffect, useState } from 'react'
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { UserType } from '@/types/db'

export const useGetUser = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    if (!currentUser) return

    const loadUser = async () => {
      const db = getFirestore()
      const ref = doc(collection(db, 'users'), currentUser.uid)
      const document = await getDoc(ref)
      const getUser = document.data() as UserType

      setUser(getUser)
    }

    loadUser()
  }, [])

  return { user, currentUser }
}
