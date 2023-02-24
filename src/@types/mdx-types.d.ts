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
  fields: MdxField
  frontmatter: MdxFrontmatter
  excerpt: string
}

export type MdxField = {
  slug: string
  categoryDirectory: string
}

export type MdxFrontmatter = {
  title: string
  tags: string
  slug: string
  createdAt: string
  updatedAt: string
}

export type MdxTableOfContent = {
  url?: string
  title?: string
  items?: MdxTableOfContent[]
}
