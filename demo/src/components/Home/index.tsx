import styled from 'styled-components';

import { ButtonLink } from '../Button';
import Linked from '../Samples/Linked';

const Container = styled.div`
  font-family: 'Source Sans Pro', 'sans-serif';
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: 500px) {
    width: calc(100% - 32px);
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 48px 0 24px 0;
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

export const Home = (props: any) => (
  <Container>
    <Title>Demo</Title>
    <Actions>
      <ActionButton to="/">Home</ActionButton>
      <ActionButton to="/docs">View Docs</ActionButton>
    </Actions>
    <Linked />
  </Container>
);

export default Home;
