import { CategoryType, TravelinkRequestType } from '@/types/db'

export const useFilterTravelink = (
  data: TravelinkRequestType,
  category: CategoryType
) => {
  const filteredData = data.links.filter((link) => link.category === category)
  return filteredData
}
