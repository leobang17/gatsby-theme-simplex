import EmailProperty from 'datastructures/metadata/properties/EmailProperty'

test('isValid - 실패 (@ 없음)', () => {
  const email = new EmailProperty('bluke8489gmail.com')
  expect(email.isValid()).toBe(false)
})

test('isValid - 실패 (. 없음)', () => {
  const email = new EmailProperty('bluke8489@gmailcom')
  expect(email.isValid()).toBe(false)
})

test('isValid - 실패 (@ 앞이 없음', () => {
  const email = new EmailProperty('@gmail.com')
  expect(email.isValid()).toBe(false)
})

test('isValid - 실패 (. 뒤가 없음', () => {
  const email = new EmailProperty('bluke8489@gmail.')
  expect(email.isValid()).toBe(false)
})

test('isValid - 성공', () => {
  const email = new EmailProperty('bluke8489@gmail.com')
  expect(email.isValid()).toBe(true)
})
