import StringProperty from 'datastructures/metadata/properties/StringProperty'

test('StringProperty.isValid - 실패 (빈 문자열)', () => {
  const value = ''
  const property = new StringProperty(value)
  const res = property.isValid()
  expect(res).toBe(false)
})

test('StringProperty.isValid - 성공', () => {
  const value = '문자열!'
  const property = new StringProperty(value)
  const res = property.isValid()
  expect(res).toBe(true)
})
