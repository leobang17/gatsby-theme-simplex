import CategoryStrings from 'datastructures/category/CategoryStrings'
import { HeadProps } from 'gatsby'
import { CategoryPageContext } from 'templates/CategoryPage'
import { AllMdxQuery, MdxNode } from 'types/mdx-types'
import getTitlePrefix from 'utils/getTitlePrefix'
import SEO from './seo'

export type HeadAPI<DataType = object, PageContextType = object> = (
  props: HeadProps<DataType, PageContextType>,
) => JSX.Element

export const ArticlePageHead: HeadAPI<{ mdx: MdxNode }> = ({
  location: { pathname },
  data,
}) => {
  const title = data.mdx.frontmatter.title
  return <SEO titlePrefix={title} canonical={pathname}></SEO>
}

export const CategoryPageHead: HeadAPI<AllMdxQuery, CategoryPageContext> = ({
  location: { pathname },
  pageContext: { categoryDirectory },
}) => {
  const titlePrefix = getTitlePrefix(
    CategoryStrings.initialize(categoryDirectory),
  )

  return <SEO titlePrefix={titlePrefix} canonical={pathname}></SEO>
}

export const NotFoundPageHead: HeadAPI = () => {
  return <SEO titlePrefix="Oops, Page Not Found 😰" />
}

export const InternalErrorPageHead: HeadAPI = () => {
  return <SEO titlePrefix="Something went wrong 😱" />
}
