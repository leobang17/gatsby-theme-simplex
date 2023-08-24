import styled from '@emotion/styled'
import { Box, SxProps, Theme, Typography, useTheme } from '@mui/material'
import { OBSERVING_KEY } from 'hooks/useTableOfContentsObserver'
import { themeMainContrast, themeMainDark } from 'styles/theme/colorProcessor'

function headerProps(props: JSX.IntrinsicElements['h1']) {
  const { id, children, style } = props
  return { children, style, id: id, className: OBSERVING_KEY }
}

// Headers
export const H1 = (props: JSX.IntrinsicElements['h1']) => {
  const sx: SxProps<Theme> = {
    paddingBottom: '0.4rem',
    borderBottom: '1px solid',
    borderColor: themeMainDark('border'),
    // color: themeMainContrast('plainText'),
  }

  return <Typography variant="h1" {...headerProps(props)} sx={sx} />
}

export const H2 = (props: JSX.IntrinsicElements['h2']) => {
  const sx: SxProps<Theme> = {
    paddingBottom: '0.4rem',
    borderBottom: '1px solid',
    borderColor: themeMainDark('border'),
    // color: themeMainContrast('plainText'),
  }
  return <Typography variant="h2" {...headerProps(props)} sx={sx} />
}

export const H3 = (props: JSX.IntrinsicElements['h3']) => {
  return (
    <Typography
      variant="h3"
      // color={themeMainContrast('plainText')}
      {...headerProps(props)}
    />
  )
}

export const H4 = (props: JSX.IntrinsicElements['h4']) => {
  return (
    <Typography
      variant="h4"
      // color={themeMainContrast('plainText')}
      {...headerProps(props)}
    />
  )
}

export const H5 = (props: JSX.IntrinsicElements['h5']) => {
  return (
    <Typography
      variant="h5"
      // color={themeMainContrast('plainText')}
      {...headerProps(props)}
    />
  )
}

// Texts
export const P = (props: JSX.IntrinsicElements['p']) => {
  const sx: SxProps<Theme> = {
    marginBlock: '1em',
    lineHeight: '1.6rem',
    // color: themeMainContrast('plainText'),
  }
  return (
    <Typography
      component="p"
      variant="body1"
      children={props.children}
      sx={sx}
    />
  )
}

export const STRONG = styled.strong``

export const EM = (props: JSX.IntrinsicElements['em']) => (
  <Typography component="em">{props.children}</Typography>
)

export const HR = (props: JSX.IntrinsicElements['hr']) => (
  <Typography component="hr">{props.children}</Typography>
)

export const BLOCKQUOTE = (props: JSX.IntrinsicElements['blockquote']) => {
  const theme = useTheme()
  return (
    <Box
      component="blockquote"
      sx={{
        marginInlineStart: '1rem',
        paddingX: '1rem',
        borderLeft: `5px solid ${
          theme.palette.mode === 'dark'
            ? theme.palette.border.dark
            : theme.palette.border.main
        }`,
      }}
    >
      <Typography
        color={
          theme.palette.mode === 'dark'
            ? theme.palette.subText.light
            : theme.palette.subText.main
        }
      >
        {props.children}
      </Typography>
    </Box>
  )
}

export const DEL = (props: JSX.IntrinsicElements['del']) => (
  <Typography component="del">{props.children}</Typography>
)

export const A = (props: JSX.IntrinsicElements['a']) => {
  const theme = useTheme()
  const Anchor = styled.a`
    color: ${theme.palette.mode === 'dark'
      ? theme.palette.primary.light
      : theme.palette.primary.main};
    text-decoration: underline;

    :hover {
      font-weight: 500;
    }
  `
  return <Anchor {...props} />
}

// Lists
export const UL = (props: JSX.IntrinsicElements['ul']) => (
  <Typography
    component="ul"
    // color={themeMainContrast('plainText')}
    children={props.children}
    sx={{
      paddingInlineStart: '25px',
    }}
  />
)

export const OL = (props: JSX.IntrinsicElements['ol']) => (
  <Typography
    component="ol"
    // color={themeMainContrast('plainText')}
    children={props.children}
    sx={{
      paddingInlineStart: '25px',
    }}
  />
)

export const LI = (props: JSX.IntrinsicElements['li']) => (
  <Typography
    component="li"
    // color={themeMainContrast('plainText')}
    children={props.children}
  />
)

// Tables
export const TH = (props: JSX.IntrinsicElements['th']) => {
  const theme = useTheme()
  return (
    <Box
      component="th"
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.gray.dark
            : theme.palette.gray.light,
        border: `0.1px solid ${
          theme.palette.mode === 'dark'
            ? theme.palette.border.dark
            : theme.palette.border.dark
        }`,
      }}
    >
      <Typography
        variant="subtitle1"
        // color={themeMainContrast('plainText')}
      >
        {props.children}
      </Typography>
    </Box>
  )
}

export const TD = (props: JSX.IntrinsicElements['td']) => {
  const theme = useTheme()
  return (
    <Box
      component="td"
      sx={{
        paddingX: '0.5rem',
        border: `0.1px solid ${
          theme.palette.mode === 'dark'
            ? theme.palette.border.light
            : theme.palette.border.contrastText
        }`,
      }}
    >
      <Typography
        variant="body1"
        // color={themeMainContrast('plainText')}
      >
        {props.children}
      </Typography>
    </Box>
  )
}

export const TABLE = (props: JSX.IntrinsicElements['table']) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'auto',
      }}
    >
      <table style={{ borderSpacing: 0, overflow: 'auto' }} {...props} />
    </Box>
  )
}

export const THEAD = styled.thead``

export const TBODY = styled.tbody``

export const PRE = (props: JSX.IntrinsicElements['pre']) => (
  <div
    className="gatsby-highlight"
    id={props.id}
    style={props.style}
    children={props.children}
  />
)
