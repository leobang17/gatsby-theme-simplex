/** @jsx jsx */

import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'

import { fetchSvgLogoUrl } from 'hooks/assetQueries'
import { SocialProvider } from 'types/social-provider-types'
import MetadataContext from 'datastructures/metadata/MetadataContext'
import { SOCIAL_DEFAULT, SOCIAL_HOVERED } from 'styles/social'

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
  const property = MetadataContext.getInstance().getSocial(social)
  const svgUrl = fetchSvgLogoUrl(social)

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
