import MetadataContext from 'datastructures/metadata/MetadataContext'
import React from 'react'

const FooterUsername = () => {
  const instance = MetadataContext.getInstance()
  const { name } = instance.getBio()
  const githubLink = instance.getSocial('github')
  return (
    <span>
      {githubLink.isValid() ? (
        <a href={githubLink.value}>{`Ⓒ${name.value}, `}</a>
      ) : (
        <span>{`Ⓒ${name.value}, `}</span>
      )}
    </span>
  )
}

export default FooterUsername
