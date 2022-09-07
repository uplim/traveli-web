import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { getAuth } from 'firebase/auth'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'
import { toast } from 'react-toastify'

export const useSignOut = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()
  const setCurrentUser = useSetRecoilState(currentUserState)

  const signOutHandler = async () => {
    setDisabled.on()
    try {
      const auth = getAuth()
      if (!auth.currentUser) {
        setDisabled.off()
        return
      }
      await auth.signOut()
      setCurrentUser(null)
      setDisabled.off()
      router.push('/')
    } catch (err) {
      console.error(err)
      typeof err === 'string' && toast.error(err)
      setDisabled.off()
    }
  }

  return { signOutHandler, disabled }
}
