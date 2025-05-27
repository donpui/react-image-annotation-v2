import React from 'react'
import Lowlight from 'react-lowlight'
import shallowCompare from 'react-addons-shallow-compare'

import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import markdown from 'highlight.js/lib/languages/markdown'

Lowlight.registerLanguage('js', javascript)
Lowlight.registerLanguage('xml', xml)
Lowlight.registerLanguage('css', css)
Lowlight.registerLanguage('md', markdown)

interface HighlightProps {
  language?: string;
  value?: string;
  className?: string;
  inline?: boolean;
  children?: React.ReactNode;
}

export default class Highlight extends React.Component<HighlightProps> {
  static displayName = 'Highlight'

  static defaultProps = {
    inline: false,
    language: 'md'
  }

  shouldComponentUpdate (nextProps: HighlightProps, nextState: any) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    const { children, ...props } = this.props;
    const value = children ? children.toString() : (props.value || '');

    return (
      <Lowlight
        {...props}
        value={value}
      />
    )
  }
} 