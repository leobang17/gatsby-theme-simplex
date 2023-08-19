/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import Layout from 'components/Layout'
import ErrorPageContext from 'contexts/ErrorPageContext'
import { FC } from 'react'
import { GRAY } from 'styles/Color'
import { s_mq } from 'styles/facepaint'

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

const InternalErrorPage: FC = () => {
  return (
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
              color: GRAY,
            }}
          >
            500: INTERNAL SERVER ERROR
          </figcaption>
          <figcaption
            id="description-caption"
            css={descriptionStyle}
            style={{
              color: GRAY,
            }}
          >
            블로그가 잠시 아파요... 빠른 시일 내로 복구할게요. 😢
          </figcaption>
        </figure>
      </Layout>
    </ErrorPageContext>
  )
}

export default InternalErrorPage

export { InternalErrorPageHead as Head } from 'components/head'
