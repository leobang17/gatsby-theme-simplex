/** @jsx jsx */

import React, { FC } from 'react'
import { jsx } from '@emotion/react'

import BioProperty from './cells/BioProperty'
import SocialList from './SocialList'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'

const Bio: FC = () => {
  const api = MetadataApiConfigurator.instance.api
  const { name, thumbnail, introduction, email, website, location, company } =
    api.getBio()

  return (
    <>
      <h4>{name.value}</h4>
      {/* <StaticImage src="" alt={`${name}'s thumbnail`} /> */}
      <div>{introduction.value}</div>
      <BioProperty type="mail" visible={email.isValid()}>
        {email.value}
      </BioProperty>
      <BioProperty type="location" visible={location.isValid()}>
        {location.value}
      </BioProperty>
      <BioProperty type="business" visible={company.isValid()}>
        {company.value}
      </BioProperty>
      <BioProperty type="link" visible={website.isValid()}>
        <a href={website.value}>{website.value}</a>
      </BioProperty>
      <SocialList />
    </>
  )
}

export default Bio
