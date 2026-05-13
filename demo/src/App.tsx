import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from './components/NavBar'
import Root from './components/Root/Root.tsx';
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
  const future = { v7_relativeSplatPath: true };
  
  return (
    <BrowserRouter basename={basename} future={future}>
      <Root>
        <NavBar
          title='react-image-annotation v2'
        />
        <Main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/docs"
              element={<Docs />}
            />
          </Routes>
        </Main>
        <Footer />
      </Root>
    </BrowserRouter>
  );
};

export default App
