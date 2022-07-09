import { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  query,
  where,
  getFirestore
} from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { TravelinkRequestType, Profile } from '@/types/db'

export const useGetTravelinkList = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [travelinkList, setTravelinkList] = useState<TravelinkRequestType[]>([])

  useEffect(() => {
    if (!currentUser) return

    const loadTravelinkList = async () => {
      const db = getFirestore()
      const travelinksRef = collection(db, 'travelinks')
      const travelinksQuery = query(
        travelinksRef,
        where('ownerId', '==', currentUser.uid)
      )

      const travelinksSnapshot = await getDocs(travelinksQuery)

      const getTravelinkList = travelinksSnapshot.docs.map((doc) => {
        return doc.data() as TravelinkRequestType
      })

      setTravelinkList(getTravelinkList)
    }

    loadTravelinkList()
  }, [])

  return { travelinkList }
}
