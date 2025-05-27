import React from 'react'
import { Highlight, Language, PrismTheme, RenderProps } from 'prism-react-renderer'
import { themes } from 'prism-react-renderer'

interface HighlightProps {
  language?: Language;
  value?: string;
  className?: string;
  inline?: boolean;
  children?: React.ReactNode;
}

const HighlightComponent: React.FC<HighlightProps> = ({
  language = 'tsx',
  value,
  className = '',
  inline = false,
  children
}) => {
  const code = children ? children.toString() : (value || '')
  if (inline) {
    return (
      <code className={`prism-code language-${language} ${className}`.trim()}>{code}</code>
    )
  }
  return (
    <Highlight code={code} language={language} theme={themes.github as PrismTheme}>
      {({ className: generatedClassName, style, tokens, getLineProps, getTokenProps }: RenderProps) => (
        <pre className={`${generatedClassName} ${className}`.trim()} style={style}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => {
                  const tokenProps = getTokenProps({ token });
                  return <span key={key} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  )
}

HighlightComponent.displayName = 'Highlight'

export default HighlightComponent 