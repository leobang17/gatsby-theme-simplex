/** @jsx jsx */

import { FC } from 'react'
import Layout from 'components/Layout'
import { jsx, css } from '@emotion/react'
import 'styles/404.css'
import { GRAY } from 'styles/Color'
import { s_mq } from 'styles/facepaint'
import ErrorPageContext from 'contexts/ErrorPageContext'
import { themeConfigs } from '../configuration'

const titleStyle = css(
  s_mq({
    fontSize: ['1.5rem', '2rem'],
  }),
)

const descriptionStyle = css(
  s_mq({
    fontSize: ['0.8rem', '0.9rem'],
  }),
)

const NotFoundPage: FC = () => (
  <ErrorPageContext>
    <Layout>
      <figure className="not-found-figure">
        <img
          className="not-found-image"
          src={`/404-illustrate.svg`}
          alt="404 Not Found Page Image"
        />
        <figcaption
          id="title-caption"
          css={titleStyle}
          style={{
            color: themeConfigs.light.sub,
          }}
        >
          404: PAGE NOT FOUND
        </figcaption>
        <figcaption
          id="description-caption"
          css={descriptionStyle}
          style={{
            color: GRAY,
          }}
        >
          찾고 있는 페이지가 존재하지 않네요 😢
        </figcaption>
      </figure>
    </Layout>
  </ErrorPageContext>
)

export default NotFoundPage

export { NotFoundPageHead as Head } from 'components/head'
