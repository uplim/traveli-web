import { useEffect, useState } from 'react'
import { TravelinksType } from '@/types/db'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useRouter } from 'next/router'

export const useGetTravelinks = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [travelinks, setTravelinks] = useState<TravelinksType>()
  const router = useRouter()
  const traveliId = router.query.traveliId as string

  useEffect(() => {
    if (!currentUser) return
    if (!traveliId) return

    const loadTravelinks = async () => {
      const db = getFirestore()
      const ref = doc(collection(db, 'travelinks'), traveliId)
      const travelinksDoc = await getDoc(ref)

      if (!travelinksDoc.exists()) {
        return
      }

      const getTravelinks = travelinksDoc.data() as TravelinksType
      setTravelinks(getTravelinks)
    }

    loadTravelinks()
  }, [])

  return { travelinks }
}
