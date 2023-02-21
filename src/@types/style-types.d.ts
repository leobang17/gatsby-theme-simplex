type StyleSubjects = 'NAV' | 'SIDE_STACK'

type StyleProperties =
  | 'HEIGHT'
  | 'MIN_HEIGHT'
  | 'MAX_HEIGHT'
  | 'COLOR'
  | 'DISPLAY'

export type ResponsiveStyles = {
  [key in StyleSubjects]: Partial<{
    [key in StyleProperties]: string | string[]
  }>
}

export type ColorStyles = {
  [key in StyleSubjects]: Partial<{
    COLOR: string
  }>
}
