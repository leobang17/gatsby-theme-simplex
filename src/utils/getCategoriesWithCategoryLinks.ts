import { PAGE_PREFIX } from 'constants/PageConsts'
import CategoryStrings from 'datastructures/category/CategoryStrings'
import { slugify } from './slug'

export default function getCategoriesWithCategoryLinks(
  categoryString: CategoryStrings,
): Array<[string, string]> {
  const categoryWithCategoryLinks = createCategoriesWithCategoryLinks(
    categoryString.categories,
  )

  return categoryWithCategoryLinks
}

function createCategoriesWithCategoryLinks(categories: string[]) {
  return categories.map((category, index) => {
    const slicedCategories = copySlicedListofCategory(categories, index)
    const categoryLink = createCategoryLink(slicedCategories)
    return [category, categoryLink] as [string, string]
  })
}

function copySlicedListofCategory(categories: string[], end: number) {
  return categories.slice(0, end + 1)
}

function createCategoryLink(categories: string[]) {
  return categories.reduce((prev, curr) => {
    return prev + '/' + slugify(curr)
  }, PAGE_PREFIX.CATEGORY)
}
