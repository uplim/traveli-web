import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { Profile } from '@/types/db'

export const useGetOwnerProfile = () => {
  const currentUser = useRecoilValue(currentUserState)
  const [ownerProfile, setOwnerProfile] = useState<Profile>()

  useEffect(() => {
    if (!currentUser) return
    const loadOwnerProfile = async () => {
      const db = getFirestore()
      const ownerProfileRef = doc(db, 'profiles', currentUser.uid)
      const ownerProfileDoc = await getDoc(ownerProfileRef)

      if (!ownerProfileDoc.exists()) {
        return
      }

      const getOwnerProfile = ownerProfileDoc.data() as Profile
      setOwnerProfile(getOwnerProfile)
    }

    loadOwnerProfile()
  }, [])

  return { ownerProfile }
}
