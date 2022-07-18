import { useUpdateBookmark } from '@/hooks/firestore'
import { TravelinkRequestType } from '@/types/db'
import { Box, Text } from '@chakra-ui/react'
import { IconSave } from '../Icons'

type SaveButtonProps = {
  data: TravelinkRequestType
}

export const SaveButton = ({ data }: SaveButtonProps) => {
  const updateBookmark = useUpdateBookmark

  return (
    <Box onClick={() => updateBookmark(data)}>
      <IconSave w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
      <Text>保存</Text>
    </Box>
  )
}
