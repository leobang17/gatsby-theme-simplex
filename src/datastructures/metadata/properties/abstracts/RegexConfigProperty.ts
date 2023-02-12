import ConfigProperty from './ConfigProperty'

abstract class RegexConfigProperty extends ConfigProperty {
  protected regex?: RegExp
  public flag: boolean = true
  isValid(): boolean {
    return this.flag && this.regex!.test(this.value)
  }
}

export default RegexConfigProperty
