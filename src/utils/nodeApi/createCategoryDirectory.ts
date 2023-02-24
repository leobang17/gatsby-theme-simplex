import { CATEGORY_THRESHOLD } from '../../constants/CategoryConsts'

export default function createCategoryDirectory(filePath: string) {
  const splited = filePath.split('/')
  stripTrailingSlash(splited)
  deleteFilename(splited)
  stripUnavailablePaths(splited)
  return splited.join('/')
}

function stripTrailingSlash(splitedFilePath: string[]) {
  if (hasTrailingSlash(splitedFilePath)) {
    splitedFilePath.pop()
  }
}

function deleteFilename(splitedFilePath: string[]) {
  splitedFilePath.pop()
}

function stripUnavailablePaths(splitedDirectory: string[]) {
  const remainingThreshold = getThreshold(splitedDirectory)
  while (splitedDirectory.length > remainingThreshold) {
    splitedDirectory.pop()
  }
}

function getThreshold(splitedDirectory: string[]) {
  return hasLeadingSlash(splitedDirectory)
    ? CATEGORY_THRESHOLD + 1
    : CATEGORY_THRESHOLD
}

function hasTrailingSlash(splited: string[]) {
  const lastIndex = splited.length - 1
  return splited[lastIndex] === ''
}

function hasLeadingSlash(splited: string[]) {
  return splited[0] === ''
}
