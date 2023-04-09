import { tableOfContentConfigs } from '../../configuration'
import { MdxTableOfContent } from 'types/mdx-types'
import TableOfContentTree from './TableOfContentTree'

export default class TableNode {
  private static MAX_DEPTH: number = tableOfContentConfigs.maxDepth
  readonly url?: string
  readonly title?: string
  readonly items: TableNode[] = new Array()
  private activated: boolean = false

  constructor(
    private motherTree: TableOfContentTree,
    tableOfContents: MdxTableOfContent,
    readonly depth: number = 0,
  ) {
    this.url = tableOfContents.url
    this.title = tableOfContents.title
    this._appendItems(tableOfContents.items)
    this._mapDictionaryToMotherTree()
  }

  public isActivated() {
    return this.activated
  }

  public activate() {
    this.activated = true
  }

  public deactivate() {
    this.activated = false
  }

  private _appendItems(items?: MdxTableOfContent[]) {
    if (this.depthAvailable()) {
      items?.map(table => {
        const childTable = new TableNode(this.motherTree, table, this.depth + 1)
        this.items.push(childTable)
      })
    }
  }

  private _mapDictionaryToMotherTree() {
    if (this.url) {
      this.motherTree.dictionary.set(this.url, this)
    }
  }

  private depthAvailable() {
    return this.depth < TableNode.MAX_DEPTH
  }
}
