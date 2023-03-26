/** @jsx jsx */

import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { SocialProvider } from 'types/social-provider-types'
import { SOCIAL_DEFAULT, SOCIAL_HOVERED } from 'styles/social'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import AssetApiConfigurator from 'datalayer/configurators/AssetApiConfigurator'

type SocialIconProp = {
  social: SocialProvider
}
const style = (social: SocialProvider) =>
  css({
    filter: SOCIAL_DEFAULT,
    '&:hover': {
      cursor: 'pointer',
      filter: SOCIAL_HOVERED[social],
    },
  })

const SocialIcon: FC<SocialIconProp> = ({ social }) => {
  const property = MetadataApiConfigurator.instance.api.getSocialSingle(social)
  const svgUrl = AssetApiConfigurator.instance.api.getSvgLogoUrl(social)

  return (
    <>
      {property.isValid() ? (
        <a css={style(social)} href={property.value}>
          <img height={23} src={svgUrl} />
        </a>
      ) : null}
    </>
  )
}

export default SocialIcon
