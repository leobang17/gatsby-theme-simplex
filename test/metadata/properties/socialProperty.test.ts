import WebLinkProperty from 'datastructures/metadata/properties/WebLiinkProperty'

test('isValid - 실패 (지원하지 않는 social)', () => {
  const url = 'twitterr.com/Arsenal'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(false)
})

test('isValid - 실패 (path variable 없음)', () => {
  const url = 'https://twitter.com/'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(false)
})

test('isValid - 실패 (url-unsafe 문자)', () => {
  const url = 'https://twitter.com/id.fef>@@e'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(false)
})

test('isValid - 성공 (twitter)', () => {
  const url = 'https://twitter.com/Arsenal'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(true)
})

test('isValid - 성공 (linkedin)', () => {
  const url = 'https://www.linkedin.com/in/seok-jin-bang-877882249/'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(true)
})

test('isValid - 성공 (facebook)', () => {
  const url = 'https://www.facebook.com/arsenal'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(true)
})

test('isValid - 성공 (instagram)', () => {
  const url = 'https://www.instagram.com/ba1vg/'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(true)
})

test('isValid - 성공 (github)', () => {
  const url = 'https://github.com/leobang17'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(true)
})

test('isValid - 성공 (https 없이)', () => {
  const url = 'github.com/leobang17'
  const social = new WebLinkProperty(url)
  expect(social.isValid()).toBe(true)
})
