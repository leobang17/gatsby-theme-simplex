import ConfigProperty from './abstracts/ConfigProperty'

class StringProperty extends ConfigProperty {
  isValid(): boolean {
    return this.value !== ''
  }
}

export default StringProperty
