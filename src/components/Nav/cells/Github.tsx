/** @jsx jsx */

import { StaticImage } from 'gatsby-plugin-image'
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

type GithubCellProps = {
  username: string
}

const GithubCell: FC<GithubCellProps> = ({ username }) => {
  return (
    <div>
      <a href={`https://github.com/${username}`}>
        <StaticImage
          alt={`${username}'s Github Page`}
          src="../../../images/github-mark.svg"
          height={30}
        />
      </a>
    </div>
  )
}

export default GithubCell
