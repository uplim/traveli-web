import { useBoolean } from '@chakra-ui/react'
import {
  useCheckBookmarked,
  useCreateBookmark,
  useDeleteBookmark
} from '@/hooks/firestore'
import { toast } from 'react-toastify'
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
      try {
        await createBookmark(currentUser.uid, travelink.id, travelink)
        setIsBookmarked.on()
      } catch {
        toast.error('トラベリンクの保存に失敗しました。')
      }
    } else {
      try {
        await deleteBookmark(currentUser.uid, travelink.id)
        setIsBookmarked.off()
      } catch {
        toast.error('保存の取り消しに失敗しました。')
      }
    }
    setDisabled.off()
  }

  return { onClickBookmark, disabled, isBookmarked }
}
