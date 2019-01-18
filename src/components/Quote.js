import React, { Component } from 'react'

import quotes from '../json/quotes'

class Quote extends Component {
  state = {
    quote: ''
  }

  handleClick = () => {
    const quote = { ...this.state }
    let newQuote = Object.values(quotes)[
      Math.floor(Math.random() * Math.floor(Object.values(quotes).length))
    ]

    this.setState({ quote: newQuote })
  }  
  
  render(){
      
    return (
      <div className="dFlex flexDC hAuto hMin60vh">
        <div className="dFlex justifyCC marB45">
          <button className="w125px" onClick={this.handleClick}>Get Quote</button>
        </div>
        <div className="w700px fs24 textAC">
            { this.state.quote }
        </div>
      </div>
    )
  }
}

export default Quote