import firestore from 'firebase/firestore'

export type TravelinkRequestType = firestore.DocumentData & {
  title: string
  date: [firestore.Timestamp | null, firestore.Timestamp | null]
  links: {
    category: string
    url: string
    label: string
  }[]
  canEdit: boolean
  createdAt: string
  updatedAt: string
  name: string
  icon: string
  id: string
  ownerId: string
  ownerName: string
  ownerIcon: string
  thumbnail: string
}
