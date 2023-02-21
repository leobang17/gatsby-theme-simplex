import Mapper from '../utils/Mapper'
import { ResponsiveStyles } from 'types/style-types'

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

const responsive: ResponsiveStyles = {
  NAV: {
    HEIGHT: Mapper.mapRem([3, 3.5, 3.5, 4]),
  },
  SIDE_STACK: {
    DISPLAY: ['none', 'flex'],
  },
}

export default responsive
