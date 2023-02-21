/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { fetchBlogDetail } from 'hooks/StaticQueries'
import RESPONSIVE from 'styles/responsive'
import { mq, s_mq } from 'styles/facepaint'

import TitleCell from './cells/Title'
import GithubCell from './cells/Github'
import { BORDER_MUSK } from 'styles/Color'

const navcss = css(
  {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `1px solid ${BORDER_MUSK}`,
  },
  mq({
    height: RESPONSIVE.NAV.HEIGHT,
    maxHeight: RESPONSIVE.NAV.HEIGHT,
  }),
  s_mq({
    justifyContent: ['center', 'space-between'],
  }),
)

const Nav: FC = () => {
  const { title, githubUsername } = fetchBlogDetail()
  return (
    <div css={navcss}>
      <TitleCell title={title} />
      {githubUsername ? <GithubCell username={githubUsername} /> : null}
    </div>
  )
}

export default Nav
