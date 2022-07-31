import { useBoolean } from '@chakra-ui/react'
import {
  useCheckBookmarked,
  useCreateBookmark,
  useDeleteBookmark
} from '@/hooks/firestore'
import { UserType, TravelinkRequestType } from '@/types/db'

export const useButtonBookmark = () => {
  const [disabled, setDisabled] = useBoolean()
  const { isBookmarked, setIsBookmarked } = useCheckBookmarked()
  const createBookmark = useCreateBookmark
  const deleteBookmark = useDeleteBookmark

  const onClickBookmark = async (
    currentUser: UserType | null | undefined,
    travelink: TravelinkRequestType
  ) => {
    if (!currentUser) return console.log('ログインしてください')
    setDisabled.on()
    if (!isBookmarked) {
      await createBookmark(currentUser.uid, travelink.id, travelink)
      setIsBookmarked.on()
    } else {
      await deleteBookmark(currentUser.uid, travelink.id)
      setIsBookmarked.off()
    }
    setDisabled.off()
  }

  return { onClickBookmark, disabled, isBookmarked }
}
