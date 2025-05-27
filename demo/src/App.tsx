import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from './components/NavBar'
import Root from './components/Root'
import Home from './components/Home'
import Docs from './components/Docs'
import Footer from './components/Footer'

const Main = styled.main`
  margin: 0 16px;
  margin-top: 51px;
`

const App = () => {
  const isDev = import.meta.env.DEV;
  const basename = isDev ? '' : '/react-image-annotation';
  
  return (
    <BrowserRouter basename={basename}>
      <Root>
        <NavBar
          title='react-image-annotation'
        />
        <Main>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/docs"
              component={Docs}
            />
          </Switch>
        </Main>
        <Footer />
      </Root>
    </BrowserRouter>
  );
};

export default App
