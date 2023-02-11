import { extractSocialProvider } from 'utils/urlExtractor'
import RegexConfigProperty from './abstracts/RegexConfigProperty'

class WebLinkProperty extends RegexConfigProperty {
  private static readonly REGEX_PREFIX = '^(https://)?(www.)?'
  private static readonly REGEX_POSTFIX =
    "(.com/)([A-Za-z0-9-._~()'!*:@,;?/#+&=]){1,35}$"
  constructor(readonly value: string) {
    super(value)
    const social = this.extractSocialOrElseSetFlag(value)
    if (this.flag) {
      const fullRegex = this.getFullRegex(social!)
      this.regex = new RegExp(fullRegex)
    }
  }

  private extractSocialOrElseSetFlag(value: string) {
    try {
      return extractSocialProvider(value)
    } catch (e) {
      this.flag = false
      return
    }
  }

  private getFullRegex(social: string) {
    return WebLinkProperty.REGEX_PREFIX + social + WebLinkProperty.REGEX_POSTFIX
  }
}

export default WebLinkProperty
