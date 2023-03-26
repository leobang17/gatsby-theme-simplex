/** @jsx jsx */

import { FC } from 'react'
import Layout from 'components/Layout'
import { jsx } from '@emotion/react'
import 'styles/404.css'
import { GRAY, SECOND } from 'styles/Color'

const NotFoundPage: FC = () => (
  <Layout>
    <figure>
      <img src={`/404-illustrate.svg`} alt="404 Not Found Page Image" />
      <figcaption
        id="title-caption"
        style={{
          color: SECOND,
        }}
      >
        404: PAGE NOT FOUND
      </figcaption>
      <figcaption
        id="description-caption"
        style={{
          color: GRAY,
        }}
      >
        찾고 있는 페이지가 존재하지 않네요 😢
      </figcaption>
    </figure>
  </Layout>
)

export default NotFoundPage

export { NotFoundPageHead as Head } from 'components/head'
