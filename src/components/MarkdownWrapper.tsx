import { MDXProvider } from '@mdx-js/react'
import React, { FC, ReactNode } from 'react'

type MarkdownWrapperProps = {
  children: ReactNode
}

const MarkdownWrapper: FC<MarkdownWrapperProps> = ({ children }) => {
  return (
    <>
      <MDXProvider components={{}}>{children}</MDXProvider>
    </>
  )
}

export default MarkdownWrapper
