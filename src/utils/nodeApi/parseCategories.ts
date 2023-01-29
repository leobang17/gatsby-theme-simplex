import { slugify } from '../slug'

const CATEGORY_NUM = 2

export function parseCategories(filePath: string) {
  const filePathArr = filePath.split('/')
  lrStripSlashes(filePathArr)
  deleteFilename(filePathArr)
  return extractCategories(filePathArr)
}

function extractCategories(filePathArr: string[]) {
  let count = 0
  const categories: string[] = []
  while (count < CATEGORY_NUM && filePathArr.length > 0) {
    const slugifiedCategory = slugify(filePathArr.shift()!)
    categories.push(slugifiedCategory)
    count++
  }

  return categories
}

function deleteFilename(filePathArr: string[]) {
  filePathArr.pop()
}

function lrStripSlashes(filePathArr: string[]) {
  filePathArr.pop()
  filePathArr.shift()
  return filePathArr
}
