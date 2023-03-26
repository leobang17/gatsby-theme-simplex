export function slugify(value: string) {
  let slug = trimSpaces(value)
  slug = convertConnectiveCharToHyphen(slug)
  slug = camelToHyphenedSnake(slug)
  slug = removeUrlUnsafeChars(slug)
  slug = condensConsecutiveHyphens(slug)
  return slug
}

function trimSpaces(slug: string) {
  return slug.trimStart().trimEnd()
}

function convertConnectiveCharToHyphen(slug: string) {
  return slug.replace(/[\s_:;]+/g, '-')
}

function camelToHyphenedSnake(slug: string) {
  return slug
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/[-\s]+/g, '-')
    .toLowerCase()
}

function removeUrlUnsafeChars(slug: string) {
  return slug.replace(/[.,!?:;"'`^*(){}]/g, '')
}

function condensConsecutiveHyphens(slug: string) {
  return slug.replace(/-+/g, '-')
}
