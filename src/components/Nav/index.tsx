/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import RESPONSIVE from 'styles/responsive'
import { mq, s_mq } from 'styles/facepaint'

import TitleCell from './cells/Title'
import GithubCell from './cells/Github'
import { BORDER_MUSK } from 'styles/Color'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'

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
  const api = MetadataApiConfigurator.instance.api
  const { title } = api.getBlogMetadata()
  const github = api.getSocialSingle('github')
  return (
    <div css={navcss}>
      <TitleCell title={title.value} />
      {github.isValid() ? <GithubCell siteUrl={github.value} /> : null}
    </div>
  )
}

export default Nav
