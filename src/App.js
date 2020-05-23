import React, { Component } from 'react';
import './App.css';

import Petals from './components/Petals'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: '',
      petals: []
    }
  }

  doClick = (e) => {
    e.preventDefault()
    let petal_nums = this.getRandomInt(10, 6)
    console.log(petal_nums)
    this.setState({
      items: petal_nums
    })
  }

  getRandomInt(max ,min = 1) {
    let random = Math.floor( Math.random() * (max + 1 - min) ) + min
    return random
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* buttonをコンポーネントに */}
          <button className="button" onClick={this.doClick}>start</button>
          {/* circleをコンポーネントに */}
          <div className="main-contents">
            <div className="circle-box">
              <div className="circle"></div>
              <Petals items={this.state.items}/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
