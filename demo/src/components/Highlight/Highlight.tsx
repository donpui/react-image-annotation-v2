import React from 'react';
import {
  Highlight,
  Language,
  PrismTheme,
  RenderProps,
} from 'prism-react-renderer';
import { themes } from 'prism-react-renderer';

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
  children,
}) => {
  const code = children ? children.toString() : value || '';
  if (inline) {
    return (
      <code className={`prism-code language-${language} ${className}`.trim()}>
        {code}
      </code>
    );
  }
  return (
    <div style={{ overflow: 'auto', minWidth: '50%' }}>
      <Highlight
        code={code}
        language={language}
        theme={themes.github as PrismTheme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }: RenderProps) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

HighlightComponent.displayName = 'Highlight';

export default HighlightComponent;
