/** @jsx jsx */

import { FC } from 'react'
import { fetchBlogDetail } from 'hooks/StaticQueries'
import TitleCell from './cells/Title'
import GithubCell from './cells/Github'
import { css, jsx } from '@emotion/react'
import { mq, NAV_HEIGHT_REM } from '../../styles/Responsive'
import Mapper from 'utils/Mapper'

const navcss = css(
  mq({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: NAV_HEIGHT_REM,
    maxHeight: NAV_HEIGHT_REM,
    padding: Mapper.mapRemFlatten([0, 6, 0, 6]),
    borderBottom: '1px solid #ECECEF',
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
