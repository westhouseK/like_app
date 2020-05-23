import React, { Component } from 'react';
import './App.css';

import Petals from './components/Petals'
import Like from './components/Like'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      petals: [],
      display_flg: false,
    }
  }

  start_game = async() => {

    const init = () => {
      this.setState({
        petals: [],
      })
    }

    const get_style = () => {
      let petal_nums = this.get_random_int(10, 6)
      let deg = 360.0/petal_nums
      let red = ( deg * Math.PI / 180.0)
      // 要調整
      let circle_r = 72 * 2.5;

      for (let i=0; i < petal_nums ; i++) {
        // 花びらの位置を決定
        let style = {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "aliceblue",
        };
        style.top  = Math.cos(red * i) * circle_r + circle_r
        style.left = Math.sin(red * i) * circle_r + circle_r

        let { petals } = this.state
        petals.push(style)
        this.setState({ petals })
      }
    }

    await init()
    get_style()
  }

  get_random_int(max ,min = 1) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* buttonをコンポーネントに */}
          <button className="button" onClick={this.start_game}>start</button>
          {/* circleをコンポーネントに */}
          <div className="main-contents">
            <div className="circle-box">
              <div className="circle"></div>
              <Petals petals={this.state.petals}/>
            </div>
          </div>
          {this.state.display_flg ? <Like /> : ''}
        </header>
      </div>
    );
  }
}

export default App;
