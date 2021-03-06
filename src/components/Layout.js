// @flow
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../lib/theme'
import { media } from '../lib/styleUtils'

import Meta from './Meta'
import Header from './Header'

type Props = {|
  children: React.Node,
|}

class Layout extends React.Component<Props, void> {
  render() {
    console.log('Props', this.props)
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Meta />
          <Header />
          {children}
          <DownloadApp>
            Download the Tunebay app for the best on-the-go experience.
          </DownloadApp>
        </StyledLayout>
      </ThemeProvider>
    )
  }
}

const DownloadApp = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.primaryRedOpacity(0.98)};
  color: ${props => props.theme.white};

  bottom: 0;
  font-weight: 600;
  height: 100px;
  width: 100%;
  padding: 2rem;

  align-items: center;
  display: none;
  justify-content: center;
  position: fixed;
  text-align: center;
  text-transform: uppercase;

  ${media.phone`
    display: flex;
  `};
`

const StyledLayout = styled.div`
  width: 100%;
  padding-bottom: 10rem;
`

export default Layout
