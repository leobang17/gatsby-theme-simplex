import { Box, useTheme } from '@mui/material'
import { Highlight, themes } from 'prism-react-renderer'
import { classnames } from 'tss-react/tools/classnames'

const CodeBlock = ({ children, className }) => {
  const theme = useTheme()
  const language = className ? className.replace(/language-/, '') || '' : ''

  return (
    <Highlight
      code={children.trim()}
      language={language}
      theme={
        theme.palette.mode === 'dark' ? themes.vsDark : themes.jettwaveLight
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} data-language={language} style={style}>
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ line, key: index })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
