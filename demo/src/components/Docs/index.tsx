import { FC } from 'react';
import styled from 'styled-components';
import Highlight from '../Highlight/Highlight.tsx';

// Import Sample Components (now .tsx)
import Simple from '../Samples/Simple';
import Multi from '../Samples/Multiple';
import Linked from '../Samples/Linked';
import Custom from '../Samples/Custom';
import Threaded from '../Samples/Threaded';
import Touch from '../Samples/Touch';
import { ButtonLink } from '../Button/Button.tsx';

import simpleCode from '../Samples/Simple/index.tsx?raw';
import multiCode from '../Samples/Multiple/index.tsx?raw';
import linkedCode from '../Samples/Linked/index.tsx?raw';
import customCode from '../Samples/Custom/index.tsx?raw'; // You might need to create this if it doesn't exist
import threadedCode from '../Samples/Threaded/index.tsx?raw'; // You might need to create this
import touchCode from '../Samples/Touch/index.tsx?raw';
import Drag from '../Samples/Drag/Drag.tsx';
import dragCode from '../Samples/Drag/Drag.tsx?raw';

const Container = styled.main`
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 64px;
  max-width: 1000px;
`;

const Actions = styled.div`
  display: block;
  margin-bottom: 24px;
  text-align: center;
`;

const ActionButton = styled(ButtonLink)`
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  width: 150px;
`;

const ExampleContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Docs: FC = () => (
  <Container>
    <Actions>
      <ActionButton to="/">Demo</ActionButton>
      <ActionButton to="/docs">Examples</ActionButton>
    </Actions>
    <h1>Annotation with Drag capability</h1>
    <ExampleContainer>
      <Drag />
      {/* <Highlight>{dragCode}</Highlight> */}
    </ExampleContainer>
{/* 
    <h1>Simple Annotation</h1>
    <ExampleContainer>
      <Simple />
      <Highlight>{simpleCode}</Highlight>
    </ExampleContainer>

    <h1>Multiple Type/Shape Support</h1>
    <Multi />
    <Highlight>{multiCode}</Highlight>

    <h1>Controlled Active Annotations</h1>
    <Linked />
    <p>
      Hover over the text items above and notice how it triggers the active
      status of their respective annotations
    </p>
    <Highlight>{linkedCode}</Highlight>

    <h1>Custom Renderers/Components/Styles</h1>
    <Custom />

    <Highlight>{customCode}</Highlight>

    <h1>Threaded Comments (Custom Content Overlay)</h1>
    <Threaded />

    <Highlight>{threadedCode}</Highlight>

    <h1>Touch support</h1>
    <Touch />
    <Highlight>{touchCode}</Highlight> */}
  </Container>
);

export default Docs;
