import CategoryNode from './CategoryNode'

export type CategoryTreeObject = {
  name: string
  count: number
  categoryDirectory: string
  activated: boolean
  slug: string
  nodeDepth: number
  sub: CategoryTreeObject[]
}

export default class CategoryTree {
  private static readonly ROOT_NODE_NAME = 'total'
  private root: CategoryNode
  private activatedNode?: CategoryNode

  constructor() {
    this.root = new CategoryNode(CategoryTree.ROOT_NODE_NAME, this)
  }

  append(categories: string[], count: number) {
    this.root.add(categories, count)
  }

  activateCurrentCategory(currentSlug: string) {
    this.root.activateRecursively(currentSlug)
  }

  changeActivatedNode(categoryNode: CategoryNode) {
    if (this.activatedNode) {
      this.activatedNode.deactivate()
    }
    this.activatedNode = categoryNode
  }

  toObject() {
    return this.root.toObject()
  }
}
