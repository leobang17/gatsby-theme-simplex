import parseCategory from './nodeApi/parseCategory'
import { slugify } from './slug'

export default function getCategoriesWidhCategoryLinks(
  categoryDirectory: string,
): Array<[string, string]> {
  const categories = parseCategory(categoryDirectory)
  const categoryWithCategoryLinks =
    createCategoriesWithCategoryLinks(categories)

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
  }, '')
}
