import firestore from 'firebase/firestore'

export type TravelinkRequestType = firestore.DocumentData & {
  title: string
  date: [firestore.Timestamp | null, firestore.Timestamp | null]
  links: LinkType[]
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

export type CategoryType = '食事' | '場所' | 'その他'
export type LinkType = {
  url: string
  label: string
  category: CategoryType
}
