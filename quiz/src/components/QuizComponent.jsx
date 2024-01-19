import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className ="container">
        <div className = "box">
            <h1 id='ques'>Questions</h1>
            <p id="noq">1 of 15</p>
            <p id="ques-txt">Which is the only mammal that can jump?</p>
            
            <div id = "chooseOne">
                <div className = "animals">Dog</div>
                <div className = "animals">Elephant</div>
                <div className = "animals">Goat</div>
                <div className = "animals">Lion</div>
            </div>

            <div className = "options">
                <div className="click-btns" id = "prev">Previous</div>
                <div className="click-btns" id = "next">Next</div>
                <div className="click-btns" id = "quit">Quit</div>
            </div>
        </div>
      </div>
    )
  }
}
