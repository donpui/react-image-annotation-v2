import React, { Component } from 'react';
import styled from 'styled-components';
import Highlight from '../Highlight/index.tsx'; // Ensure .tsx

// Import Sample Components (now .tsx)
import Simple from '../Samples/Simple/index.tsx';
import Multi from '../Samples/Multiple/index.tsx';
import Linked from '../Samples/Linked/index.tsx';
import Custom from '../Samples/Custom/index.tsx';
import Threaded from '../Samples/Threaded/index.tsx';
import Touch from '../Samples/Touch/index.tsx';

// Import Code Snippets (.txt files - ensure global.d.ts covers .txt)
// Assuming these .txt files exist or will be created in the respective Sample directories
import simpleCode from '../Samples/Simple/index.txt';
import multiCode from '../Samples/Multiple/index.txt';
import linkedCode from '../Samples/Linked/index.txt';
import customCode from '../Samples/Custom/index.txt'; // You might need to create this if it doesn't exist
import threadedCode from '../Samples/Threaded/index.txt'; // You might need to create this
import touchCode from '../Samples/Touch/index.txt';

const Container = styled.main`
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 64px;
  max-width: 700px;
`;

const SourceLink = styled.a`
  display: block;
  margin-top: 8px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
`;

// Props for Docs component (if any, currently none)
interface DocsProps {}

// State for Docs component (if any, currently none)
interface DocsState {}

export default class Docs extends Component<DocsProps, DocsState> {
  render() {
    return (
      <Container>
        <h1>Simple Annotation</h1>
        <Simple />
        <Highlight>
          {simpleCode}
        </Highlight>

        <h1>Multiple Type/Shape Support</h1>
        <Multi />
        <Highlight>
          {multiCode}
        </Highlight>

        <h1>Controlled Active Annotations</h1>
        <Linked />
        <p>Hover over the text items above and notice how it triggers the active status of their respective annotations</p>
        <Highlight>
          {linkedCode}
        </Highlight>

        <h1>Custom Renderers/Components/Styles</h1>
        <Custom />
        {/* <SourceLink target='_blank' href='https://github.com/Secretmapper/react-image-annotation/blob/master/demo/src/components/Samples/Custom/index.js'>
          View source
        </SourceLink> */}
        <Highlight>
          {customCode}
        </Highlight>

        <h1>Threaded Comments (Custom Content Overlay)</h1>
        <Threaded />
        {/* <SourceLink target='_blank' href='https://github.com/Secretmapper/react-image-annotation/blob/master/demo/src/components/Samples/Threaded/index.js'>
          View source
        </SourceLink> */}
        <Highlight>
          {threadedCode}
        </Highlight>

        <h1>Touch support</h1>
        <Touch />
        <Highlight>
          {touchCode}
        </Highlight>
      </Container>
    );
  }
} 