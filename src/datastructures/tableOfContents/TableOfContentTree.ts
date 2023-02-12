import { MdxTableOfContent } from 'types/mdx-types'
import TableNode from './TableNode'

export default class TableOfContentTree {
  readonly dictionary: Map<string, TableNode> = new Map()
  readonly root: TableNode
  public activatedNode?: TableNode

  constructor(tableOfContents: MdxTableOfContent) {
    this.root = new TableNode(this, tableOfContents)
  }

  activate(url: string) {
    this.activateNewNodeIfExists(url)
    return this
  }

  private activateNewNodeIfExists(url: string) {
    try {
      const currentNode = this.findTableNodeOrThrow(url)
      this.deactivateCurrentActivatedNode()
      this.activateNewNode(currentNode)
    } catch (e) {
      console.log(`ERROR: ${(e as Error).message}`)
    }
  }

  private deactivateCurrentActivatedNode() {
    this.activatedNode?.deactivate()
  }

  private activateNewNode(node: TableNode) {
    this.activatedNode = node
    this.activatedNode.activate()
  }

  private findTableNodeOrThrow(url: string) {
    const key = this.decodeBase64URLEncoding(url)
    if (this.dictionary.has(key)) {
      return this.dictionary.get(key)!
    } else {
      throw new Error(`해당 key: ${key}에 대한 link를 찾지 못함.`)
    }
  }

  private decodeBase64URLEncoding(url: string) {
    return decodeURIComponent(url)
  }
}
