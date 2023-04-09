import styled from '@emotion/styled'
import { themeConfigs } from '../../../configuration'
import { BORDER_MUSK, GRAY, LIGHT_GRAY } from 'styles/Color'

// Headers
export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid ${BORDER_MUSK};
`

export const H2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid ${BORDER_MUSK};
`

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`

export const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
`

export const H5 = styled.h5`
  font-size: 1rem;
  font-weight: 500;
`

// Texts
export const P = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6rem;
`

export const STRONG = styled.strong`
  font-weight: 500;
`

export const EM = styled.em``

export const HR = styled.hr``

export const BLOCKQUOTE = styled.blockquote`
  padding-inline-start: 1rem;
  margin-inline-start: 0.2rem;
  border-left: 5px solid ${BORDER_MUSK};

  & p,
  h1,
  h2,
  h3,
  h4,
  h5,
  li {
    color: ${GRAY};
  }
`

export const DEL = styled.del`
  font-weight: 300;
`
export const A = styled.a`
  color: ${themeConfigs.light.sub};
  text-decoration: underline;
`

// Lists
export const UL = styled.ul`
  padding-inline-start: 25px;
`

export const OL = styled.ol`
  padding-inline-start: 25px;
`

export const LI = styled.li`
  font-weight: 300;
`

// Tables
export const TH = styled.th`
  font-weight: 400;
  padding-block: 0.3rem;
  padding-inline: 0.5rem;
  text-align: start;
  background-color: ${BORDER_MUSK};
  border: 0.1px solid ${LIGHT_GRAY};
`

export const TD = styled.td`
  font-weight: 300;
  padding-block: 0.3rem;
  padding-inline: 0.5rem;
  border: 0.1px solid ${LIGHT_GRAY};
`

export const TABLE = styled.table`
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
`

export const THEAD = styled.thead``

export const TBODY = styled.tbody``
