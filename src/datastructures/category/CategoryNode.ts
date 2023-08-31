import { categoryConfigs } from '../../configuration'
import CategoryStrings from './CategoryStrings'
import CategoryTree, { CategoryTreeObject } from './CategoryTree'

export default class CategoryNode {
  private static readonly MAX_DEPTH = categoryConfigs.maxDepth
  private count: number = 0
  private activated: boolean = false
  readonly subCategories: Map<string, CategoryNode> = new Map()
  readonly categoryString: CategoryStrings

  constructor(
    readonly name: string,
    readonly motherTree: CategoryTree,
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

  activateRecursively(currentSlug: string) {
    if (currentSlug.startsWith(this.categoryString.categoryDirectory)) {
      this._activate()
    }
    this.subCategories.forEach(cat => cat.activateRecursively(currentSlug))
  }

  toObject() {
    const current: CategoryTreeObject = this.createCurrentObject()
    this.subCategories.forEach(category => {
      const subObject = category.toObject()
      current.sub.push(subObject)
    })

    return current
  }

  deactivate() {
    this.activated = false
  }

  private _activate() {
    this.motherTree.changeActivatedNode(this)
    this.activated = true
  }

  private createCurrentObject() {
    return {
      name: this.name,
      count: this.count,
      slug: this.categoryString.slug,
      activated: this.activated,
      categoryDirectory: this.categoryString.categoryDirectory,
      nodeDepth: this.nodeDepth,
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

    const subNode = new CategoryNode(
      name,
      this.motherTree,
      this.nodeDepth + 1,
      this,
    )
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
