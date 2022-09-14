import { useEffect, useState } from 'react'
import { TravelinkRequestType } from '@/types/db'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore'
import { useRouter } from 'next/router'

export const useGetTravelink = () => {
  const [travelink, setTravelink] = useState<TravelinkRequestType | null>(null)
  const router = useRouter()
  const traveliId = router.query.traveliId as string

  useEffect(() => {
    if (!router.isReady) return

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
  }, [router.isReady])

  return { travelink }
}
