import { User } from '@/types/db'
import { atom } from 'recoil'
import { AtomKeys } from '@/recoil/keys'

export const userState = atom<User | null>({
  key: AtomKeys.USER_STATE,
  default: null
})
