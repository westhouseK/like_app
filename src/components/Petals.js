import React, { Component } from 'react'

class Petals extends Component {

  vanish = (e) => {
    e.preventDefault()
    e.target.style.display = "none";
    this.setState({
      like: true
    })
  }
  
  render() {
    let petals = this.props.petals
    if (petals === undefined) return (<div></div>);
    
    return (
      <div>
      {petals.map((style, i) => 
        <div key={i} style={style} className="item" onClick={this.vanish}></div>
      )}
      </div>
    )
  }
}

export default Petals