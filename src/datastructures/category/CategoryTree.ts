import { CATEGORY_THRESHOLD } from '../../constants/CategoryConsts'
import CategoryStrings from './CategoryStrings'

export type CategoryTreeObject = {
  name: string
  count: number
  categoryDirectory: string
  slug: string
  sub: CategoryTreeObject[]
}

export class CategoryTree {
  private static readonly ROOT_NODE_NAME = 'total'
  root: CategoryNode

  constructor() {
    this.root = new CategoryNode(CategoryTree.ROOT_NODE_NAME)
  }

  append(categories: string[], count: number) {
    this.root.add(categories, count)
  }

  toObject() {
    return this.root.toObject()
  }
}

class CategoryNode {
  private static readonly MAX_DEPTH = CATEGORY_THRESHOLD
  private count: number = 0
  readonly subCategories: Map<string, CategoryNode> = new Map()
  readonly categoryString: CategoryStrings

  constructor(
    readonly name: string,
    readonly nodeDepth: number = 0,
    readonly parent?: CategoryNode,
  ) {
    const categoryDirectory = this.constructCategoryDirectory()
    this.categoryString = CategoryStrings.initialize(categoryDirectory)
  }

  add(categories: string[], count: number) {
    this.increaseCount(count)
    if (this.shouldExit(categories)) {
      return
    }

    this.addSubNodeRecursively(categories, count)
  }

  toObject() {
    const current: CategoryTreeObject = this.createCurrentObject()
    this.subCategories.forEach(category => {
      const subObject = category.toObject()
      current.sub.push(subObject)
    })

    return current
  }

  private createCurrentObject() {
    return {
      name: this.name,
      count: this.count,
      slug: this.categoryString.slug,
      categoryDirectory: this.categoryString.categoryDirectory,
      sub: [],
    }
  }

  private addSubNodeRecursively(categories: string[], count: number) {
    const name = categories.shift()!
    this.setSubNodeIfFirst(name)
    this.subCategories.get(name)!.add(categories, count)
  }

  private setSubNodeIfFirst(name: string) {
    if (this.subNodeExists(name)) {
      return
    }

    const subNode = new CategoryNode(name, this.nodeDepth + 1, this)
    this.subCategories.set(name, subNode)
  }

  private constructCategoryDirectory() {
    if (this.parent) {
      return this.parent.categoryString.categoryDirectory + this.name
    }
    return ''
  }

  private isEmpty(arr: Array<unknown>) {
    return arr.length <= 0
  }

  private increaseCount(count: number) {
    this.count += count
  }

  private shouldExit(categories: string[]) {
    return this.isEmpty(categories) || !this.depthAvailable()
  }

  private depthAvailable() {
    return this.nodeDepth < CategoryNode.MAX_DEPTH
  }

  private subNodeExists(name: string) {
    return this.subCategories.has(name)
  }
}
