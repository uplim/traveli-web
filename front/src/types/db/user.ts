import firestore from 'firebase/firestore'

export type UserType = firestore.DocumentData & {
  uid: string
  isAnonymous: boolean
  name?: string
  icon?: string
}

export type Profile = firestore.DocumentData & {
  name: string
  icon: string
}
