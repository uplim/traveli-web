import { Box } from '@chakra-ui/react'
import { useGetTravelink } from '@/hooks/firestore'

const LinkList = () => {
  const { travelink } = useGetTravelink()

  return (
    <>
      {!travelink ? (
        <>ローディングアイコン</>
      ) : (
        <Box>
          <Box>{travelink.title}</Box>
          <Box>{travelink.date}</Box>
          <Box>
            {travelink.links.map(({ url, label }, index) => (
              <Box key={index}>
                <Box>{url}</Box>
                <Box>{label}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  )
}

export default LinkList
