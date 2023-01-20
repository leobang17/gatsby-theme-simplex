import { HeadProps } from 'gatsby'
import React from 'react'

type HeadMetaData = {
  title: string
  description: string
}

export function getStaticPageHead(
  args: HeadMetaData,
): (props: HeadProps) => JSX.Element {
  const { title, description } = args
  return () => {
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </>
    )
  }
}
