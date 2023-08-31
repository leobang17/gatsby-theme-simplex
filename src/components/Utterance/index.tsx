import { ThemeContext } from 'contexts/theme/ThemeContext'
import MetadataApiConfigurator from 'datalayer/configurators/MetadataApiConfigurator'
import React from 'react'

const src = 'https://utteranc.es/client.js'
const utteranceId = 'utterance-comment'

export interface UtterancesProps {}

const Utterances: React.FC<UtterancesProps> = React.memo(() => {
  const { issue_repo } = MetadataApiConfigurator.instance.api.getUtterance()
  const { mode } = React.useContext(ThemeContext)

  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const utterances = document.createElement('script')
    const containerDiv = containerRef.current

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

    utterances.onload = _ => {
      const comments = document.getElementById(utteranceId)
      if (comments && comments.children[1]) {
        comments.removeChild(comments.firstChild!)
      }
    }

    utterances.async = true

    containerDiv?.appendChild(utterances)
  }, [mode])

  return <div ref={containerRef} id={utteranceId} />
})

Utterances.displayName = 'Utterances'

export default Utterances
