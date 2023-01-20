import React, { FC } from 'react'

type GithubCellProps = {
  username: string
}

const GithubCell: FC<GithubCellProps> = ({ username }) => {
  return (
    <div>
      <a href={`https://github.com/${username}`}>GithubCell</a>
    </div>
  )
}

export default GithubCell
