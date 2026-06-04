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
import DragCustomRender from '../Samples/Drag/DragCustomRender.tsx';
import DrawingCursor from '../Samples/DrawingCursor';
import drawingCursorCode from '../Samples/DrawingCursor/index.tsx?raw';
import Delete from '../Samples/Delete';
import deleteCode from '../Samples/Delete/index.tsx?raw';
import MultiPoints from '../Samples/MultiPoints';

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

    <h1>Drag + custom highlight and content</h1>
    <p>
      Custom <code>renderHighlight</code> and <code>renderContent</code> via{' '}
      <code>renderSlots</code>. With <code>enableEditing</code>, draggable handles tint the
      box on top of your highlight borders (they are composed, not replaced). Override{' '}
      <code>renderDraggableHighlight</code> only if you need fully custom editing chrome.
    </p>
    <ExampleContainer>
      <DragCustomRender />
    </ExampleContainer>

    <h1>Custom cursor while drawing</h1>
    <p>
      Use <code>drawingCursor</code> to set a CSS cursor on the interaction layer while
      drag-drawing a new annotation (<code>selection.mode === &apos;SELECTING&apos;</code>
      ). Pass a file URL with hotspot coordinates, or an inline SVG via{' '}
      <code>data:image/svg+xml</code>.
    </p>
    <ExampleContainer>
      <DrawingCursor />
      {/* <Highlight>{drawingCursorCode}</Highlight> */}
    </ExampleContainer>

    <h1>Built-in delete control</h1>
    <p>
      Enable <code>enableRemoval</code> and handle removal in{' '}
      <code>onRemoveAnnotation</code>. Use <code>canRemoveAnnotation</code> to
      gate delete per annotation (Region B has <code>allowDelete: false</code>).
    </p>
    <ExampleContainer>
      <Delete />
      {/* <Highlight>{deleteCode}</Highlight> */}
    </ExampleContainer>

    <h1>Multi-point Polygon Annotation</h1>
    <p>
      Use <code>PolygonSelector</code> to draw free-form polygons by clicking to place
      points. Supports 3–50 points. Double-click or click the first point (turns green on
      hover) to close. Press <kbd>Esc</kbd> to cancel.
    </p>
    <ExampleContainer>
      <MultiPoints />
    </ExampleContainer>

    <h1>Simple Annotation</h1>
    <ExampleContainer>
      <Simple />
      {/* <Highlight>{simpleCode}</Highlight> */}
    </ExampleContainer>
    <ExampleContainer>
      <h1>Multiple Type/Shape Support</h1>
      <Multi />
    </ExampleContainer>
{/* 
    

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
