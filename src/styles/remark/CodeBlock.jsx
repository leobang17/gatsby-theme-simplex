import { Box, useTheme } from '@mui/material'
import { Highlight, themes } from 'prism-react-renderer'
import { classnames } from 'tss-react/tools/classnames'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-cshtml'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-textile'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-swift'

const CodeBlock = ({ children, className }) => {
  const theme = useTheme()
  const language = className ? className.replace(/language-/, '') || '' : 'text'

  return (
    <Highlight
      code={children.trim()}
      language={language}
      theme={theme.palette.mode === 'dark' ? themes.vsDark : themes.github}
      prism={Prism}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          component="pre"
          className={className}
          data-language={language}
          style={style}
          sx={{
            fontFamily:
              'Fira Code, Fira Mono, Menlo, Consolas, DejaVu Sans Mono, monospace;',
          }}
        >
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ line, key: index })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  )
}

export default CodeBlock
