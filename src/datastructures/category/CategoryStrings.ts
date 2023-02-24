import CategoryStringParser from './CategoryStringParser'

type CallerType = 'FilePath' | 'CategoryDirectory'

class CategoryStrings {
  public readonly categoryDirectory: string
  public readonly categories: string[]
  public readonly slug: string
  private readonly parser: CategoryStringParser =
    CategoryStringParser.singleton()

  public static initialize(directory: string) {
    return new CategoryStrings(directory, 'CategoryDirectory')
  }

  public static initializeWithFilePath(directory: string) {
    return new CategoryStrings(directory, 'FilePath')
  }

  public isParentOf(categoryString: CategoryStrings) {
    return categoryString.categoryDirectory.startsWith(this.categoryDirectory)
  }

  private constructor(directory: string, caller: CallerType) {
    switch (caller) {
      case 'FilePath':
        this.categoryDirectory = this.parser.toCategoryDirectory(directory)
        break
      case 'CategoryDirectory':
        this.categoryDirectory = this.parser.refineCategoryDirectory(directory)
    }
    this.categories = this.parser.toCategories(directory)
    this.slug = this.parser.toSlug(this.categories)
  }
}

export default CategoryStrings
