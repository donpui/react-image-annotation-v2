import React from 'react'
import styled from 'styled-components'

import { ButtonLink } from '../Button'
import Highlight from '../Highlight'

import Simple from '../Samples/Simple'
import Multiple from '../Samples/Multiple'
import Custom from '../Samples/Custom'
import Threaded from '../Samples/Threaded'
import Touch from '../Samples/Touch'
import Linked from '../Samples/Linked'

const Container = styled.div`
  font-family: 'Source Sans Pro', 'sans-serif';
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: 500px) {
    width: calc(100% - 32px);
  }
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 48px 0 24px 0;
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 16px 0 8px 0;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 16px 0;
`

const Actions = styled.div`
  display: block;
  margin-bottom: 24px;
  text-align: center;
`

const ActionButton = styled(ButtonLink)`
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  width: 150px;
`

export default (props: any) => (
  <Container>
    <Title>
      Demo
    </Title>
    <Actions>
      <ActionButton to="/docs">
        View Docs
      </ActionButton>
    </Actions>
    <SubTitle>
      Simple Annotation
    </SubTitle>
    <Description>
      Single annotation, with a basic rectangle selector and default editor.
    </Description>
    <Simple />
    <SubTitle>
      Multiple Annotations
    </SubTitle>
    <Description>
      Multiple annotations of varying types, with custom editor and comment rendering.
    </Description>
    <Multiple />
    <SubTitle>
      Custom Annotation Types
    </SubTitle>
    <Description>
      Annotations of custom types, rendered with custom components.
    </Description>
    <Custom />
    <SubTitle>
      Threaded Annotations
    </SubTitle>
    <Description>
      Multiple annotations, with threaded comments.
    </Description>
    <Threaded />
    <SubTitle>
      Touch Enabled Annotations
    </SubTitle>
    <Description>
      Annotations on touch enabled devices. Try it on your phone!
    </Description>
    <Touch />
    <SubTitle>
      Linked Annotations
    </SubTitle>
    <Description>
      Annotations can be linked together to represent relationships.
    </Description>
    <Linked />
  </Container>
) 