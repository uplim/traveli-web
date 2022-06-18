import { getAuth, signInAnonymously } from 'firebase/auth'

export const useSignInAnonymously = async () => {
  const auth = getAuth()

  try {
    await signInAnonymously(auth)
  } catch (err) {
    console.error(err)
  }
}
