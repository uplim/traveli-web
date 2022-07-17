import { FormCreateUpdateLinks } from '@/components/Forms'
import { useRoleEdit } from '@/hooks/role/'

const Edit = () => {
  const { travelink, isLoading, isOwner } = useRoleEdit()

  return (
    <>
      {!travelink || isLoading ? (
        <>ローディングアイコン</>
      ) : (
        <FormCreateUpdateLinks
          formType={'update'}
          travelinkData={travelink}
          isOwner={isOwner}
        />
      )}
    </>
  )
}

export default Edit
