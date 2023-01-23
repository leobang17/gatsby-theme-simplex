abstract class ConfigProperty {
  constructor(readonly value: string) {}
  abstract isValid(): boolean
}

export default ConfigProperty
