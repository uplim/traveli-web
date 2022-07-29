import { FormCreateUpdateLinks } from '@/components/Forms'
import { Loading } from '@/components/Loadings'
import { useGetOwnerProfile } from '@/hooks/firestore'

const Create = () => {
  const { ownerProfile } = useGetOwnerProfile()

  return (
    <>
      {!ownerProfile ? (
        <Loading />
      ) : (
        <FormCreateUpdateLinks ownerProfile={ownerProfile} />
      )}
    </>
  )
}

export default Create
