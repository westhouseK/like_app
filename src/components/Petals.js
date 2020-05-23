import React, { Component } from 'react'

class Petals extends Component {


  vanish = (e) => {
    e.preventDefault()
    console.log(e.target)
    e.target.style.display = "none";
  }
  
  render() {
    let items = this.props.items
    
    let deg = 360.0/items
    let red = ( deg * Math.PI / 180.0)
    // 要検討
    let circle_r = 72 * 2.5;

    let styles = []
    for (let i=0; i < items ; i++) {
      let style = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "aliceblue",
      };
      let x = Math.cos(red * i) * circle_r + circle_r;
      var y = Math.sin(red * i) * circle_r + circle_r;
      style.top  = x;
      style.left = y;
      styles.push(style)
    }

    let result = []
    for (let i=0; i < items ; i++) {
      result.push(<div id={i} key={i} style={styles[i]} className="item" onClick={this.vanish}></div>)
    }

    return ( 
      <div>{result}</div>
    )
  }
}

export default Petals