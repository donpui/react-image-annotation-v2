import React from 'react';

interface HighlightProps {
  language?: string;
  value?: string;
  className?: string;
  inline?: boolean;
  children?: React.ReactNode;
}

const preStyle: React.CSSProperties = {
  overflow: 'auto',
  minWidth: '50%',
  margin: 0,
  padding: '1em',
  background: '#f6f8fa',
  borderRadius: '4px',
  fontSize: '0.875em',
  lineHeight: 1.6,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
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
      <code className={`language-${language} ${className}`.trim()}>{code}</code>
    );
  }
  return (
    <div style={{ overflow: 'auto', minWidth: '50%' }}>
      <pre style={preStyle}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

HighlightComponent.displayName = 'Highlight';

export default HighlightComponent;
