export const INDEX_PAGE_TITLE = '인덱스 페이지 입니다.'
export const INDEX_PAGE_DESCRIPTION = '인덱스 페이지 설명입니다.'

export type Pages = 'CATEGORY' | 'ARTICLE' | 'INDEX'

export const PAGE_PREFIX: Record<Pages, Readonly<string>> = {
  CATEGORY: '/categories',
  ARTICLE: '/posts',
  INDEX: '/',
}
