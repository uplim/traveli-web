import firestore from 'firebase/firestore'

export type TravelinkRequestType = firestore.DocumentData & {
  title: string
  date: string
  links: {
    url: string
    label: string
  }[]
  canEdit: boolean
  createdAt: string
  updatedAt: string
  id: string
  ownerId: string
  thumbnail: string
}
