import { parseCategories } from '../../src/utils/nodeApi/parseCategories'

// given
const path1 = 'path1'
const path2 = 'path2'
const path3 = 'path3'
const filename = 'filename1'

function createFilePath(...paths: string[]) {
  let filePath = '/'
  for (const path of paths) {
    filePath += path + '/'
  }
  return filePath
}

test('parseCategories - 성공 (path 0)', () => {
  // given
  const path = createFilePath(filename)
  // when
  const res = parseCategories(path)
  expect(res).toStrictEqual([])
})

test('parseCategories - 성공 (path 1)', () => {
  // given
  const path = createFilePath(path1, filename)
  // when
  const res = parseCategories(path)
  expect(res).toStrictEqual([path1])
})

test('parseCategories - 성공 (path 2)', () => {
  // given
  const path = createFilePath(path1, path2, filename)
  // when
  const res = parseCategories(path)
  expect(res).toStrictEqual([path1, path2])
})

test('parseCategories - 성공 (path 3)', () => {
  // given
  const path = createFilePath(path1, path2, path3, filename)
  // when
  const res = parseCategories(path)
  expect(res).toStrictEqual([path1, path2])
})
