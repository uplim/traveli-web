import { FormCreateUpdateLinks } from '@/components/Forms'
import { useGetOwnerProfile } from '@/hooks/firestore'

const Create = () => {
  const { ownerProfile } = useGetOwnerProfile()

  return (
    <>
      {!ownerProfile ? (
        <>ローディングアイコン</>
      ) : (
        <FormCreateUpdateLinks ownerProfile={ownerProfile} />
      )}
    </>
  )
}

export default Create
