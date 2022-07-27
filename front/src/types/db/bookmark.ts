import firestore from 'firebase/firestore'

export type BookmarkType = firestore.DocumentData & {
  title: string
  date: [firestore.Timestamp | null, firestore.Timestamp | null]
  id: string
  ownerName: string
  ownerIcon: string
  thumbnail: string
}
