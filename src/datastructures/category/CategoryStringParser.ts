import { categoryConfigs } from '../../configuration'
import { slugify } from '../../utils/slug'

class CategoryStringParser {
  private static CATEGORY_MAX_DEPTH: number = categoryConfigs.maxDepth
  private static instance: CategoryStringParser
  private constructor() {}

  static singleton() {
    this._setInstanceIfNotExists()
    return this.instance
  }

  toCategoryDirectory(filePath: string) {
    const directories = filePath.split('/')
    this.lrStripSlashes(directories)
    this.dropFilename(directories)
    this.dropExeedingCategories(directories)
    return directories.reduce((prev, curr) => {
      return prev + curr + '/'
    }, '/')
  }

  toCategories(categoryDirectory: string) {
    const categories = categoryDirectory.split('/')
    this.purifyCategories(categories)

    return categories
  }

  toSlug(categories: string[]) {
    this.purifyCategories(categories)

    return categories.reduce((prev, curr) => {
      return prev + slugify(curr) + '/'
    }, '/')
  }

  refineCategoryDirectory(categoryDirectory: string) {
    if (categoryDirectory[categoryDirectory.length - 1] !== '/') {
      return categoryDirectory + '/'
    }
    return categoryDirectory
  }

  private purifyCategories(categories: string[]) {
    this.lrStripSlashes(categories)
    this.dropExeedingCategories(categories)
  }

  private dropExeedingCategories(splited: string[]) {
    while (splited.length > CategoryStringParser.CATEGORY_MAX_DEPTH) {
      splited.pop()
    }
  }

  private dropFilename(splited: string[]) {
    splited.pop()
  }

  private lrStripSlashes(splited: string[]) {
    this.stripLeadingSlash(splited)
    this.stripTrailingSlash(splited)
  }

  private stripLeadingSlash(splited: string[]) {
    if (this.hasLeadingSlash(splited)) {
      splited.shift()
    }
  }

  private stripTrailingSlash(splited: string[]) {
    if (this.hasTrailingSlash(splited)) {
      splited.pop()
    }
  }

  private hasLeadingSlash(splited: string[]) {
    return splited[0] === ''
  }

  private hasTrailingSlash(splited: string[]) {
    const lastIndex = splited.length - 1
    return splited[lastIndex] === ''
  }

  private static _setInstanceIfNotExists() {
    if (!this.instance) {
      this.instance = new CategoryStringParser()
    }
  }
}

export default CategoryStringParser
