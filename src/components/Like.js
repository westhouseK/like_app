import React, { Component } from 'react'

class Like extends Component {

  render() {
    const like_flg = this.props.like_flg
    return (
      <h2>
        { like_flg ? 'スキ' : 'キライ'}
      </h2>
    )
  }
}

export default Like