import { Box } from '@chakra-ui/react'
import { useGetTravelinks } from '@/firestore/travelinks/'

const LinkList = () => {
  const { travelinks } = useGetTravelinks()

  return (
    <>
      {!travelinks ? (
        <>ローディングアイコン</>
      ) : (
        <Box>
          <Box>{travelinks.title}</Box>
          <Box>{travelinks.date}</Box>
          <Box>
            {travelinks.links.map(({ url, label }, index) => (
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
