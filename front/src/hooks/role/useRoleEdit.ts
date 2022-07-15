import { useGetTravelink } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

export const useRoleEdit = () => {
  const [isLoading, setIsLoading] = useBoolean()
  const { travelink } = useGetTravelink()
  const currentUser = useRecoilValue(currentUserState)
  const router = useRouter()

  useEffect(() => {
    setIsLoading.on()
    if (!travelink) return
    if (!currentUser) return
    if (currentUser.uid !== travelink.ownerId && !travelink.canEdit)
      router.push('/')
    else setIsLoading.off()
  }, [travelink])

  return {
    isLoading,
    travelink
  }
}
