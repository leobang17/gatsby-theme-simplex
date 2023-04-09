export type Pages = 'CATEGORY' | 'ARTICLE' | 'INDEX'

export const PAGE_PREFIX: Record<Pages, Readonly<string>> = {
  CATEGORY: '/categories',
  ARTICLE: '/posts',
  INDEX: '/',
}
