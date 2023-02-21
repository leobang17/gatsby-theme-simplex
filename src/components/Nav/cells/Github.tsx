/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'
import { fetchSvgLogoUrl } from 'hooks/assetQueries'
import { s_mq } from 'styles/facepaint'

type GithubCellProps = {
  username: string
}

const style = css(
  css`
    margin-inline: 3rem;
  `,
  s_mq({
    display: ['none', 'flex'],
  }),
)

const GithubCell: FC<GithubCellProps> = ({ username }) => {
  const githubUrl = fetchSvgLogoUrl('github')

  return (
    <a css={style} href={`https://github.com/${username}`}>
      <img alt={`${username}'s Github Page`} src={githubUrl} height={30} />
    </a>
  )
}

export default GithubCell
