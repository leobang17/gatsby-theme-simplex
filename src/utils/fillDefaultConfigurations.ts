export default function fillDefaultConfigurations<
  T extends { [key: string]: string | number },
>(input: T, defaults: T) {
  const output = { ...input }
  for (const key in input) {
    if (isPropertyInappropriate(output[key])) {
      output[key] = defaults[key]
    }
  }

  return output
}

function isPropertyInappropriate(prop: string | number | null | undefined) {
  return prop === undefined || prop === null || prop === '' || prop === 0
}
