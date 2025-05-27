import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

export default () => (
  <Router basename={import.meta.env.DEV ? '' : '/react-image-annotation'}>
    <Root>
      <NavBar
        title='react-image-annotation'
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
  </Router>
)
