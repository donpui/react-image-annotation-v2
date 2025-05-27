import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

export default (props) => (
  <SyntaxHighlighter language='jsx'>
    {props.children}
  </SyntaxHighlighter>  
)
