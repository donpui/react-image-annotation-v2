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

type TokenLine = RenderProps['tokens'][number];

const getLineText = (line: TokenLine) =>
  line.map((token) => token.content).join('');

const getKeyedLines = (tokens: TokenLine[]) => {
  const lineCounts = new Map<string, number>();

  return tokens.map((line) => {
    const lineText = getLineText(line);
    const lineCount = (lineCounts.get(lineText) ?? 0) + 1;
    lineCounts.set(lineText, lineCount);

    return {
      id: `${lineText}-${lineCount}`,
      line,
    };
  });
};

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
            {getKeyedLines(tokens).map(({ id, line }) => (
              <div key={id} {...getLineProps({ line })}>
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
