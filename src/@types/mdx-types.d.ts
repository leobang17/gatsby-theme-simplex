import { Node } from 'gatsby'

export type AllMdxQuery = {
  allMdx: {
    nodes: MdxNode[]
  }
}

export type AllMdxGroupByQuery = {
  allMdx: {
    group: GroupByNode[]
  }
}

export type GroupByNode = {
  fieldValue: string
  totalCount: number
}

export type MdxNode = Node & {
  body: string
  excerpt: string
  fields: MdxField
  frontmatter: MdxFrontmatter
  tableOfContents: MdxTableOfContent
}

export type MdxField = {
  slug: string
  timeToRead: number
  categoryDirectory: string
}

export type MdxFrontmatter = {
  title: string
  createdAt: string
}

export type MdxTableOfContent = {
  url?: string
  title?: string
  items?: MdxTableOfContent[]
}
