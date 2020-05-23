import React, { Component } from 'react'

class Petals extends Component {

  render() {
    let petals = this.props.petals
    if (petals === undefined) return (<div></div>);
    
    return (
      <div>
      {petals.map((style, i) => 
        <div key={i} style={style} className="item" onClick={this.props.vanish}></div>
      )}
      </div>
    )
  }
}

export default Petals