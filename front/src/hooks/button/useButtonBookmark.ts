import { useBoolean } from '@chakra-ui/react'
import {
  useCheckBookmarked,
  useCreateBookmark,
  useDeleteBookmark
} from '@/hooks/firestore'
import { TravelinkRequestType } from '@/types/db'
import type { UserType } from '@/types/db'

export const useButtonBookmark = () => {
  const [disabled, setDisabled] = useBoolean()
  const { isBookmarked, setIsBookmarked } = useCheckBookmarked()
  const createBookmark = useCreateBookmark
  const deleteBookmark = useDeleteBookmark

  const onClickBookmark = async (
    travelink: TravelinkRequestType,
    currentUser: UserType | null | undefined
  ) => {
    if (!currentUser) return
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
