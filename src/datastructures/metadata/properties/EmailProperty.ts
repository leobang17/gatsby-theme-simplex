import RegexConfigProperty from './abstracts/RegexConfigProperty'

class EmailProperty extends RegexConfigProperty {
  static readonly EMAIL_REGEX: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  constructor(readonly value: string) {
    super(value)
    this.regex = EmailProperty.EMAIL_REGEX
  }
}

export default EmailProperty
