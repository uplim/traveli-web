import { useRecoilValue } from 'recoil'
import { currentUserState } from '@/recoil/atoms'

export const useGetCurrentUser = () => {
  const currentUser = useRecoilValue(currentUserState)

  return {
    currentUser
  }
}
