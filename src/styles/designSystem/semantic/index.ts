// https://www.semrush.com/blog/semantic-html5-guide/#html-semantic-tags-for-structure

import styled from '@emotion/styled'
import { l_mq } from 'styles/facepaint'

// Semantic tags for Text
export const H1 = styled.h1`
  font-weight: 500;
`

export const H2 = styled.h2`
  font-weight: 500;
`

export const P = styled.p`
  font-weight: 400;
`

export const SPAN = styled.span`
  font-weight: 400;
`

// Semantic tags for Structure
export const SUMMARY = styled.summary`
  font-weight: 400;
`

export const ASIDE = styled.aside`
  width: '256px',
    ${l_mq({
      display: ['none', 'flex'],
    })};
`
