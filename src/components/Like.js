import React, { Component } from 'react'

class Like extends Component {

  render() {
    const like_flg = this.props.like_flg
    return (
      <div className='like'>
        { like_flg ? 'スキ' : 'キライ'}
      </div>
    )
  }
}

export default Like