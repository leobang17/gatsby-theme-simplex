/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { l_mq } from 'styles/facepaint'
import AssetApiConfigurator from 'datalayer/configurators/AssetApiConfigurator'

type GithubCellProps = {
  siteUrl: string
}

const style = css(
  css`
    margin-inline: 3rem;
  `,
  l_mq({
    display: ['none', 'flex'],
  }),
)

const GithubCell: FC<GithubCellProps> = ({ siteUrl }) => {
  const api = AssetApiConfigurator.instance.api
  const githubUrl = api.getSvgLogoUrl('github')

  return (
    <a css={style} href={siteUrl}>
      <img alt={`Github Page`} src={githubUrl} height={30} />
    </a>
  )
}

export default GithubCell
