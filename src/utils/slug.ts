export function categoryToSlug(categories: string[]) {
  return `/${categories[0] ? categories[0] + '/' : ''}${categories[1] ?? ''}`
}

export function slugToCategory(slug: string) {
  return slug.split('/').filter(s => s !== '')
}

export function slugify(value: string) {
  value = value.trimStart()
  value = value.trimEnd()
  return value.replace(/\s+/g, '-')
}

export function slugifyFilepath(filepath: string) {
  return (
    '/' +
    slugToCategory(filepath)
      .map(dir => slugify(dir))
      .join('/')
  )
}
