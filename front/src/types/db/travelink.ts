import firestore from 'firebase/firestore'

export type TravelinkRequestType = firestore.DocumentData & {
  title: string
  date: [firestore.Timestamp | null, firestore.Timestamp | null]
  links: {
    url: string
    label: string
    category: CategoryType
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

export type CategoryType = '食事' | '場所' | 'その他'
