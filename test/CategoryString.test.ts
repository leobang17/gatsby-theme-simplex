import CategoryStrings from '../src/datastructures/category/CategoryStrings'

const filepath = '/DIRECTORY1/DIRECTORY2/FILENAME1/'
const categoryDirectory = '/DIRECTORY1/DIRECTORY2/'

test('Initialize with filepath', () => {
  const categoryString = CategoryStrings.initializeWithFilePath(filepath)

  expect(categoryString.categoryDirectory).toBe('/DIRECTORY1/DIRECTORY2/')
  expect(categoryString.slug).toBe('/directory1/directory2/')
  expect(categoryString.categories).toMatchObject(['DIRECTORY1', 'DIRECTORY2'])
})

test('Initialize with category directory', () => {
  const categoryString = CategoryStrings.initialize(categoryDirectory)

  expect(categoryString.categoryDirectory).toBe('/DIRECTORY1/DIRECTORY2/')
  expect(categoryString.slug).toBe('/directory1/directory2/')
  expect(categoryString.categories).toMatchObject(['DIRECTORY1', 'DIRECTORY2'])
})
