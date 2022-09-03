import { atom } from 'recoil'
import { AtomKeys } from '@/recoil/keys'

export const historyState = atom<string | undefined>({
  key: AtomKeys.ROUTE_HISTORY,
  default: undefined
})
