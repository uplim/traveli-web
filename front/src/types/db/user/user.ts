import firestore from 'firebase/firestore'

export type User = firestore.DocumentData & {
  uid: string
  isAnonymouse: boolean
}
