import React, { FC } from 'react'
import { fetchSiteMetadata } from 'hooks/StaticQueries'
import TitleCell from './cells/Title'
import GithubCell from './cells/Github'

const Nav: FC = () => {
  const { title, githubUsername } = fetchSiteMetadata()
  console.log(title)
  // title 넣을 수 있도록. static query로 가져옴
  // 하단 스크롤 시 없어지게
  return (
    <>
      {title}, {githubUsername}
      <TitleCell title={title} />
      {githubUsername ? <GithubCell username={githubUsername} /> : null}
    </>
  )
}

export default Nav
