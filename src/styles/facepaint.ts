import facepaint from 'facepaint'
import Mapper from '../utils/Mapper'

/**
 * @BreakPoints
 *      ~ 576           // 모바일 (Mobile)
 *
 * 576  ~ 769           // 작은 태블릿 (Tablet - small)
 *
 * 768  ~ 1200          // 큰 태블릿 (Tablet - large)
 *
 * 1200 ~               // 데스크탑 (Desktop)
 */

const S = 576 // MOBILE
const M = 768 // TABLET
const L = 1200 // DESKTOP

const BREAKPOINTS: Readonly<number[]> = [S, M, L]

export const mq = facepaint(Mapper.mapMediaQuery(BREAKPOINTS))
export const s_mq = facepaint(Mapper.mapMediaQuery([S]))
export const m_mq = facepaint(Mapper.mapMediaQuery([M]))
export const l_mq = facepaint(Mapper.mapMediaQuery([L]))
export const sm_mq = facepaint(Mapper.mapMediaQuery([S, M]))
export const ml_mq = facepaint(Mapper.mapMediaQuery([M, L]))
export const sml_mq = facepaint(Mapper.mapMediaQuery([S, L]))
