import { FormUpdateLinks } from '@/components/Forms/FormUpdateLinks'
import { useGetTravelink } from '@/hooks/firestore'

const LinkList = () => {
  const { travelink } = useGetTravelink()
  return (
    <>
      {!travelink ? (
        <>ローディングアイコン</>
      ) : (
        <FormUpdateLinks data={travelink} />
      )}
    </>
  )
}

export default LinkList
