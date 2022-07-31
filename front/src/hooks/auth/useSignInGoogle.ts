import {
  getAuth,
  GoogleAuthProvider,
  linkWithPopup,
  signInWithPopup
} from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { currentUserState } from '@/recoil/atoms'
import { useBoolean } from '@chakra-ui/react'

export const useSignInGoogle = () => {
  const [disabled, setDisabled] = useBoolean() 
  const setCurrentUser = useSetRecoilState(currentUserState)
  
  const signInGoogleHandler = async () => {
    setDisabled.on()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    
    // 匿名認証済みの時は、リンクさせる
    if (auth.currentUser) {
      await linkWithPopup(auth.currentUser, provider)
        .then((result) => {
          const user = result.user
          setCurrentUser({
            uid: user.uid,
            isAnonymous: user.isAnonymous
          })
        })
        .catch((err) => {
          console.error(err)
          setCurrentUser(null)
          setDisabled.off()
        })
    } else {
      await signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          setCurrentUser({
            uid: user.uid,
            isAnonymous: user.isAnonymous
          })
        })
        .catch((err) => {
          console.error(err)
          setCurrentUser(null)
          setDisabled.off()
        })
    }
  }

  return { signInGoogleHandler, disabled }
 
}
