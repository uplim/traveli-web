import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Profile } from '@/types/db'

export const useGetOwnerProfile = (uid: string | undefined) => {
  const [ownerProfile, setOwnerProfile] = useState<Profile>()

  useEffect(() => {
    const loadOwnerProfile = async () => {
      if (!uid) return
      const db = getFirestore()
      const ownerProfileRef = doc(db, 'profiles', uid)
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
