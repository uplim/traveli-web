import firestore from 'firebase/firestore'

export type CurrentUser = firestore.DocumentData & {
  uid: string
  isAnonymous: boolean
}

export type Profile = firestore.DocumentData & {
  name: string
  icon: string
}
