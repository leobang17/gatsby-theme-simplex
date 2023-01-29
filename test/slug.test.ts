import { slugifyFilepath } from '../src/utils/slug'

test('slugifyFilepath', () => {
  const filepath = '/Computor Science/운영체제/공룡책 운영체제/'
  const res = slugifyFilepath(filepath)

  expect(res).toBe('/Computor-Science/운영체제/공룡책-운영체제')
})
