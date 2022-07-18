import firestore, { Timestamp } from 'firebase/firestore'

export type BookmarkType = firestore.DocumentData & {
  items: {
    id: number
    title: string
    thumbnail: string
    date: [Timestamp | null, Timestamp, null]
  }[]
}
