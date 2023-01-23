/** @jsx jsx */

import { jsx } from '@emotion/react'
import { socialProviders } from 'types/social-provider-types'
import SocialIcon from './cells/SocialIcon'

const SocialList = () => {
  return (
    <div>
      {socialProviders.map(social => (
        <SocialIcon social={social} />
      ))}
    </div>
  )
}

export default SocialList
