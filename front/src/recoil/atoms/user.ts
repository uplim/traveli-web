import { UserType } from '@/types/db'
import { atom } from 'recoil'
import { AtomKeys } from '@/recoil/keys'

// undefined またログインが完了していない状態
// null ログイン確認をした結果、ログインしていない状態
export const currentUserState = atom<UserType | null | undefined>({
  key: AtomKeys.CURRENT_USER_STATE,
  default: undefined
})
