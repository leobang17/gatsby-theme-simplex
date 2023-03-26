import CategoryStrings from 'datastructures/category/CategoryStrings'

export default function getTitlePrefix(categoryString: CategoryStrings) {
  const categories = categoryString.categories
  let titlePrefix: string
  if (categories.length > 0) {
    titlePrefix = `Category: ${categories.join(' > ')}`
  } else {
    titlePrefix = `All Posts`
  }

  return titlePrefix
}
