import firestore from 'firebase/firestore'

export type UserType = firestore.DocumentData & {
  uid: string
  isAnonymous: boolean
  name?: string
  icon?: string | null
}
