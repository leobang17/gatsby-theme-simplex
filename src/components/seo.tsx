import React from 'react'

import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import { ChildrenProps } from 'types/react-types'
import AssetApiConfigurator from 'datalayer/configurators/AssetApiConfigurator'

type SEOProps = {
  titlePrefix?: string
  canonical?: string
  keywords?: string[]
} & Partial<ChildrenProps>

const SEO = ({ titlePrefix, canonical, keywords, children }: SEOProps) => {
  const { title, siteUrl, description } =
    MetadataApiConfigurator.instance.api.getBlogMetadata()
  const faviconUrl = AssetApiConfigurator.instance.api.getFaviconUrl()
  const keywordString = keywords?.join(',')
  const representingTitle = `${titlePrefix} | ${title.value}`
  const url = siteUrl.value + canonical
  return (
    <>
      <title>{representingTitle}</title>
      <base href={siteUrl} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={faviconUrl} />
      <meta name="description" content={description.value} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="blog" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={representingTitle} />
      <meta property="og:description" content={description.value} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content={title.value} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="800" />
      {children}
    </>
  )
}

export default SEO
