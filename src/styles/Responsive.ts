import facepaint from 'facepaint'
import Mapper from '../utils/Mapper'

const BREAKPOINTS: Readonly<number[]> = [576, 768, 992, 1200]
const NAV_HEIGHT: Readonly<number[]> = [3, 3.5, 3.5, 4]

export const NAV_HEIGHT_REM = Mapper.mapRem(NAV_HEIGHT)

export const mq = facepaint(Mapper.mapMediaQuery(BREAKPOINTS))
