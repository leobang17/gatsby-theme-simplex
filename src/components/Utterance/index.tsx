import { ThemeContext } from 'contexts/theme/ThemeContext'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import React, { createRef, useLayoutEffect } from 'react'

const src = 'https://utteranc.es/client.js'

export interface UtterancesProps {}

const Utterances: React.FC<UtterancesProps> = React.memo(() => {
  const { issue_repo } = MetadataApiConfigurator.instance.api.getUtterance()
  const { mode } = React.useContext(ThemeContext)

  const containerRef = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const utterances = document.createElement('script')
    const containerDiv = containerRef.current!

    const attributes = {
      src,
      repo: issue_repo.value,
      theme: mode === 'dark' ? 'github-dark' : 'github-light',
      'issue-term': 'pathname',
      label: '✨💬 comments ✨',
      crossOrigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    while (containerDiv.lastChild) {
      containerDiv.removeChild(containerDiv.lastChild)
    }

    containerDiv.appendChild(utterances)
  }, [issue_repo])

  return <div ref={containerRef} />
})

Utterances.displayName = 'Utterances'

export default Utterances
