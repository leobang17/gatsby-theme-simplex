/** @jsx jsx */

import { FC } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOnSharp'
import MailIcon from '@mui/icons-material/MailRounded'
import BusinessIcon from '@mui/icons-material/BusinessRounded'
import LinkIcon from '@mui/icons-material/LinkRounded'
import { css, jsx } from '@emotion/react'
import Mapper from 'utils/Mapper'

type BioIconProps = {
  type: BioIconType
}

export type BioIconType = 'mail' | 'location' | 'business' | 'link'

const style = css({
  margin: Mapper.mapPxFlatten([0, 5]),
})

const BioIcon: FC<BioIconProps> = ({ type }) => {
  const render = (type: BioIconType): JSX.Element | null => {
    switch (type) {
      case 'mail': {
        return <MailIcon css={style} color="action" fontSize="small" />
      }
      case 'location': {
        return <LocationOnIcon css={style} color="action" fontSize="small" />
      }
      case 'business': {
        return <BusinessIcon css={style} color="action" fontSize="small" />
      }
      case 'link': {
        return <LinkIcon css={style} color="action" fontSize="small" />
      }
      default:
        return null
    }
  }

  return render(type)
}

export default BioIcon
