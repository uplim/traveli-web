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
  name: string
  icon: string
  id: string
  ownerId: string
  // ownerName: string
  // ownerIcon: string
  thumbnail: string
}
