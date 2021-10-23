import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {MangoCount: 0, BananaCount: 0}

  onIncrementMango = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.MangoCount}`)
      return {MangoCount: prevState.MangoCount + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.BananaCount}`)
      return {BananaCount: prevState.BananaCount + 1}
    })
  }

  render() {
    const {MangoCount, BananaCount} = this.state

    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{MangoCount}</span> mangoes
            <span className="count"> {BananaCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onIncrementMango}
                >
                  Eat Mangoes
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitCounter
