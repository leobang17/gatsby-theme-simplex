class Mapper {
  static mapRem(numbers: Readonly<number[]>) {
    return numbers.map(num => `${num}rem`)
  }

  static mapEm(numbers: Readonly<number[]>) {
    return numbers.map(num => `${num}em`)
  }

  static mapPx(numbers: Readonly<number[]>) {
    return numbers.map(num => `${num}px`)
  }

  static mapMediaQuery(breakpoints: Readonly<number[]>) {
    return breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`)
  }

  static mapRemFlatten(numbers: Readonly<number[]>) {
    return numbers.map(num => `${num}rem`).join(' ')
  }

  static mapPxFlatten(numbers: Readonly<number[]>) {
    return numbers.map(num => `${num}px`).join(' ')
  }
}

export default Mapper
