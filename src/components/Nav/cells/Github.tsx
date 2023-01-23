/** @jsx jsx */

import { FC } from 'react'
import { jsx } from '@emotion/react'
import { fetchSvgLogoUrl } from 'hooks/assetQueries'

type GithubCellProps = {
  username: string
}

const GithubCell: FC<GithubCellProps> = ({ username }) => {
  const githubUrl = fetchSvgLogoUrl('github')

  return (
    <a href={`https://github.com/${username}`}>
      <img alt={`${username}'s Github Page`} src={githubUrl} height={30} />
    </a>
  )
}

export default GithubCell
