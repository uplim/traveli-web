import firestore from 'firebase/firestore'

export type CurrentUser = firestore.DocumentData & {
  uid: string
  isAnonymous: boolean
}

export type Profile = firestore.DocumentData & {
  name: string
  icon: string
}

export type Travelinks = firestore.DocumentData & {
  title: string
  date: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
  createdAt: string
  updatedAt: string
  traveliId: string
}
