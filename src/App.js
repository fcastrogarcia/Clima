import React, { Component } from 'react'
import Top from './Top'
import Bottom from './Bottom'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clima: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(
      'https://wt-c42b8db789fa0a0fa7eb298076db922d-0.sandbox.auth0-extend.com/clima-apixu'
    )
      .then(result => result.json())
      .then(data => {
        //Cambiamos la resolución del ícono del día actual para que sea más grande
        data.current.condition.icon = data.current.condition.icon.replace(
          '64x64',
          '128x128',
        )
        this.setState({ clima: data, isLoaded: true })
      })
  }

  render() {
    const { location, current, forecast } = this.state.clima
    return this.state.isLoaded ? (
      <div className="App">
        <div className="container">
          <Top current={current} location={location} />

          <Bottom forecast={forecast} />
        </div>
      </div>
    ) : (
      <div className="App">Loading...</div>
    )
  }
}

export default App
