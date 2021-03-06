// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

type Props = {|
  size: number,
|}

export default class extends Component<Props, void> {
  render() {
    const { size } = this.props
    return (
      <Logo size={size}>
        <Image src="/static/logo.png" />
      </Logo>
    )
  }
}

const Logo = styled.div`
  height: ${props => (props.size ? `${props.size}px` : '35px')};

  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  height: 100%;
`
