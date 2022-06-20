import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { getAuth } from 'firebase/auth'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'

export const useSignOut = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useBoolean()
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  const signOutHandler = async () => {
    setDisabled.on()
    try {
      const auth = getAuth()
      if (!currentUser) {
        setDisabled.off()
        return
      }

      // 匿名認証は、ログアウトというかアカウント削除に等しいので、一旦見た目上のログアウトということにしたい
      // TODO: 匿名認証の時は、サインアウトの文言をアカウント削除に変えるなどする
      if (currentUser.isAnonymous) {
        setCurrentUser(null)
      } else {
        await auth.signOut()
        setCurrentUser(null)
      }

      setDisabled.off()
      router.push('/')
    } catch (err) {
      console.error(err)
      setDisabled.off()
    }
  }

  return { signOutHandler, disabled }
}
