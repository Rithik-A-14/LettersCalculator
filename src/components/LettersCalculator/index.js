import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: '', count: 0}

  toChangeValue = event => {
    this.setState({value: event.target.value, count: event.target.value.length})
  }

  render() {
    const {value, count} = this.state

    return (
      <div className="LettersCalculator_main">
        <div className="LettersCalculator_card">
          <h1 className="LettersCalculator_title">
            Calculate the Letters you enter
          </h1>
          <div className="LettersCalculator_Input_card">
            <label htmlFor="input" className="Input_label">
              Enter the Phrase
            </label>
            <input
              type="text"
              id="input"
              className="Input_text"
              value={value}
              placeholder="Enter the Phrase"
              onChange={this.toChangeValue}
            />
          </div>
          <div className="LettersCalculator_count_card">
            <p className="LettersCalculator_count">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="LettersCalculator_img"
        />
      </div>
    )
  }
}

export default LettersCalculator
