import React from 'react'

const Top = props => {
  const { current, location } = props
  return (
    <div className="top">
      <img
        src={current.condition.icon}
        alt="Clima principal"
        className="image"
      />
      <p className="temp">{current.temp_c} °C</p>
      <h4 className="city">
        {location.name}, {location.region}, {location.country}
      </h4>

      <div>
        ST: {current.feelslike_c} °C, H: {current.humidity} %
      </div>
    </div>
  )
}

export default Top
