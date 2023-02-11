import * as module from 'utils/urlExtractor'
import { socialProviders } from 'types/social-provider-types'

// extractDomain Test
test('extractDomain - 실패 (빈 url)', () => {
  const url = ''
  expect(() => {
    module.extractDomain(url)
  }).toThrow()
})

test('extractDomain - 실패 (잘못된 형태1)', () => {
  const url = 'fefessefe.com'
  expect(() => {
    module.extractDomain(url)
  }).toThrow()
})

test('extractDomain - 실패 (잘못된 형태2)', () => {
  const url = 'https:/fefessefe.com/'
  expect(() => {
    module.extractDomain(url)
  }).toThrow()
})

test('extractDomain - 성공 (https:// x)', () => {
  const domain = 'linkedin'
  const url = `${domain}.com/leobang`
  const res = module.extractDomain(url)
  expect(res).toBe(domain)
})

test('extractDomain - 성공 (https://)', () => {
  const domain = 'twitter'
  const url = `https://${domain}.com/leobang`
  const res = module.extractDomain(url)
  expect(res).toBe(domain)
})

// extractSocialProvider Test
test('extractSocialProvider - 실패 (extractDomain undefined 반환', () => {
  jest.spyOn(module, 'extractDomain').mockImplementation(() => undefined)
  expect(() => {
    module.extractSocialProvider('anystring')
  }).toThrow()
})

socialProviders.forEach(social => {
  test(`extractSocialProvider - 성공 (${social})`, () => {
    jest.spyOn(module, 'extractDomain').mockImplementation(() => social)
    const res = module.extractSocialProvider('anyString')
    expect(res).toBe(social)
  })
})
