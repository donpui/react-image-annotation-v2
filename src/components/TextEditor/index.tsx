import React from 'react'
import styled, { keyframes } from 'styled-components'

const Inner = styled.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`

const Button = styled.div`
  background: whitesmoke;
  border: 0;
  box-sizing: border-box;
  color: #363636;
  cursor: pointer;
  font-size: 1rem;
  margin: 0;
  outline: 0;
  padding: 8px 16px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0,0,0,0.1);
  width: 100%;

  transition: background 0.21s ease-in-out;

  &:focus, &:hover {
    background: #eeeeee;
  }
`

interface TextEditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  value
}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    textareaRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <React.Fragment>
      <Inner>
        <textarea
          ref={textareaRef}
          placeholder='Write description'
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      </Inner>
      {value && (
        <Button onClick={onSubmit}>
          Save description
        </Button>
      )}
    </React.Fragment>
  )
}

export default TextEditor
