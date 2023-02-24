export function slugify(value: string) {
  value = value.trimStart()
  value = value.trimEnd()
  return value.replace(/\s+/g, '-').toLowerCase()
}
