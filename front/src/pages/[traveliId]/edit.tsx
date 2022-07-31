import { FormCreateUpdateLinks } from '@/components/Forms'
import { Loading } from '@/components/Loadings'
import { useRoleEdit } from '@/hooks/role/'

const Edit = () => {
  const { travelink, isLoading, isOwner } = useRoleEdit()

  return (
    <>
      {!travelink || isLoading ? (
        <Loading />
      ) : (
        <FormCreateUpdateLinks travelinkData={travelink} isOwner={isOwner} />
      )}
    </>
  )
}

export default Edit
