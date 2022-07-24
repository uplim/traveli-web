import { useEffect, useState } from 'react'
import { TravelinkRequestType } from '@/types/db'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useRouter } from 'next/router'

export const useGetTravelink = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [travelink, setTravelink] = useState<TravelinkRequestType>()
  const router = useRouter()
  const traveliId = router.query.traveliId as string

  useEffect(() => {
    if (!currentUser) return
    if (!traveliId) return

    const loadTravelink = async () => {
      const db = getFirestore()
      const ref = doc(collection(db, 'travelinks'), traveliId)
      const travelinksDoc = await getDoc(ref)

      if (!travelinksDoc.exists()) {
        await router.push('/404')
        return
      }

      const getTravelink = travelinksDoc.data() as TravelinkRequestType
      setTravelink(getTravelink)
    }

    loadTravelink()
  }, [])

  return { travelink }
}
