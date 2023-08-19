import styled from '@emotion/styled'
import { Box, Typography, useTheme } from '@mui/material'
import {} from 'react'

// Headers
export const H1 = (props: JSX.IntrinsicElements['h1']) => {
  const theme = useTheme()
  const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid
      ${theme.palette.mode === 'dark'
        ? theme.palette.border.dark
        : theme.palette.border.main};
  `
  return <H1 {...props} />
}

export const H2 = (props: JSX.IntrinsicElements['h2']) => {
  const theme = useTheme()
  const H2 = styled.h2`
    font-size: 1.7rem;
    font-weight: 600;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid
      ${theme.palette.mode === 'dark'
        ? theme.palette.border.dark
        : theme.palette.border.main};
  `
  return <H2 {...props} />
}

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`

export const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
`

export const H5 = styled.h5`
  font-size: 1rem;
  font-weight: 600;
`

// Texts
export const P = styled.p`
  line-height: 1.6rem;
`

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
    color: ${theme.palette.primary.main};
    text-decoration: underline;
  `
  return <Anchor {...props} />
}

// Lists
export const UL = styled.ul`
  padding-inline-start: 25px;
`

export const OL = styled.ol`
  padding-inline-start: 25px;
`

export const LI = styled.li`
  font-weight: 400;
`

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
      <Typography variant="subtitle1">{props.children}</Typography>
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
      <Typography variant="body1">{props.children}</Typography>
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
