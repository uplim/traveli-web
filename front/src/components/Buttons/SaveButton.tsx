import { useUpdateBookmark } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { TravelinkRequestType } from '@/types/db'
import { Box, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { IconSave } from '@/components/Icons'

type SaveButtonProps = {
  data: TravelinkRequestType
  isChecked: boolean
}

export const SaveButton = ({ data, isChecked }: SaveButtonProps) => {
  const updateBookmark = useUpdateBookmark
  const currentUser = useRecoilValue(currentUserState)

  return (
    <Box
      onClick={() =>
        !isChecked && currentUser && updateBookmark(data, currentUser.uid)
      }
    >
      <IconSave w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
      <Text>{isChecked ? '保存済み' : '保存'}</Text>
    </Box>
  )
}
