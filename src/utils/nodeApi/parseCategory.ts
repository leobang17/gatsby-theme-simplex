import { CATEGORY_THRESHOLD } from '../../constants/CategoryConsts'

export default function parseCategory(categoryDirectory: string) {
  if (!categoryDirectory) {
    return []
  }
  const splited = categoryDirectory.split('/')
  stripLeadingSlash(splited)
  stripTrailingSlash(splited)
  dropUnavailableCategories(splited)
  return splited
}

function stripLeadingSlash(splited: string[]) {
  if (hasLeadingSlash(splited)) {
    splited.shift()
  }
}

function stripTrailingSlash(splited: string[]) {
  if (hasTrailingSlash(splited)) {
    splited.pop()
  }
}

function dropUnavailableCategories(splited: string[]) {
  while (splited.length > CATEGORY_THRESHOLD) {
    splited.pop()
  }
}

function hasTrailingSlash(splited: string[]) {
  const lastIndex = splited.length - 1
  return splited[lastIndex] === ''
}

function hasLeadingSlash(splited: string[]) {
  return splited[0] === ''
}
