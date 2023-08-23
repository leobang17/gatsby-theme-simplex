import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import React from 'react'

const FooterUsername = () => {
  const api = MetadataApiConfigurator.instance.api
  const { name } = api.getBio()
  const githubLink = api.getSocialSingle('github')
  return (
    <span>
      {githubLink.isValid() ? (
        <a href={githubLink.value}>{`Ⓒ${name.value}`}</a>
      ) : (
        <span>{`Ⓒ${name.value}, `}</span>
      )}
    </span>
  )
}

export default FooterUsername
