import { useUpdateBookmark } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { TravelinkRequestType } from '@/types/db'
import { Box, Text, useBoolean } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { IconSave } from '@/components/Icons'

type SaveButtonProps = {
  data: TravelinkRequestType
  isChecked: boolean
}

export const SaveButton = ({ data, isChecked }: SaveButtonProps) => {
  const [saved, setSaved] = useBoolean()
  const updateBookmark = useUpdateBookmark
  const currentUser = useRecoilValue(currentUserState)

  const onClick = (data: TravelinkRequestType, uid: string) => {
    updateBookmark(data, uid)
    setSaved.on()
  }

  return (
    <Box
      onClick={() =>
        !isChecked && currentUser && onClick(data, currentUser.uid)
      }
    >
      <IconSave w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
      <Text>{isChecked || saved ? '保存済み' : '保存'}</Text>
    </Box>
  )
}
