import { useUpdateBookmark } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { TravelinkRequestType } from '@/types/db'
import { Box, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { IconSave } from '../Icons'

type SaveButtonProps = {
  data: TravelinkRequestType
}

export const SaveButton = ({ data }: SaveButtonProps) => {
  const updateBookmark = useUpdateBookmark
  const currentUser = useRecoilValue(currentUserState)

  return (
    <Box onClick={() => currentUser && updateBookmark(data, currentUser.uid)}>
      <IconSave w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
      <Text>保存</Text>
    </Box>
  )
}
