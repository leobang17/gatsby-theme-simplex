import { FC } from 'react'

import { makeStyles } from 'tss-react/mui'
import AssetApiConfigurator from 'datalayer/configurators/AssetApiConfigurator'
import { Avatar, Link, useTheme } from '@mui/material'
import getSvgs from 'datalayer/queries/svgStaticQuery'

type GithubCellProps = {
  siteUrl: string
  drawer?: boolean
}

const useStyles = makeStyles()({
  anchor: {
    marginInline: '1.5rem',
  },
  image: {
    height: 35,
    width: 35,
  },
})

const GithubCell: FC<GithubCellProps> = ({ siteUrl, drawer = false }) => {
  const api = AssetApiConfigurator.instance.api
  const theme = useTheme()
  const { classes } = useStyles()
  const githubDark = api.getSvgLogoUrl('github')
  const githubWhite = getSvgs().nodes.find(
    node => node.name === 'github-mark-white',
  )?.publicURL

  return (
    <Link
      className={classes.anchor}
      href={siteUrl}
      sx={{
        display: drawer
          ? {
              xs: 'flex',
            }
          : {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
            },
      }}
    >
      <Avatar
        alt="Github"
        className={classes.image}
        src={theme.palette.mode === 'dark' ? githubWhite : githubDark}
      />
    </Link>
  )
}

export default GithubCell
