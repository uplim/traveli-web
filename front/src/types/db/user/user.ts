import firestore from 'firebase/firestore'

export type CurrentUser = firestore.DocumentData & {
  uid: string
  isAnonymous: boolean
  // icon: string
  // name: string
}
