import firestore, { Timestamp } from 'firebase/firestore'

export type BookmarkType = firestore.DocumentData & {
  saved: string[]
  items: {
    id: string
    title: string
    thumbnail: string
    date: [Timestamp | null, Timestamp | null]
    ownerName: string
    ownerIcon: string
  }[]
}
