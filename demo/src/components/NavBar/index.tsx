import React from 'react'
import styled from 'styled-components'

import GithubStarLink from '../GithubStarLink'

export const Header = styled.header`
  background-color: #20232a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  height: 51px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  h1 {
    font-weight: 900;
    font-size: 16px;
    margin: 0;
    text-transform: uppercase;
    color: #61DAFB;
  }
`

const NavBar = (props: { title: string }) => (
  <Header>
    <h1>
      {props.title}
    </h1>
    <GithubStarLink />
  </Header>
)

export default NavBar 