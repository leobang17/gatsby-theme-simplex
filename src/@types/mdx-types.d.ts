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

export type MdxNode = {
  id: string
  fields: MdxField
  frontmatter: MdxFrontmatter
  excerpt: string
  internal: {
    contentFilePath: string
  }
}

export type MdxField = {
  slug: string
  category: {
    major: string
    minor: string
    slug: string
  }
}

export type MdxFrontmatter = {
  title: string
  tags: string
  slug: string
  createdAt: string
  updatedAt: string
}
