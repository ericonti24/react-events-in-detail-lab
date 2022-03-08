// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = () => {
        setTimeout(() => this.onDelayedClick(event), this.props.delay)
    }

  render() {
    return ()
  }
}
