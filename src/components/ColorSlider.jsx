import React, { useState, useEffect } from 'react'

const ColorSlider = () => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [light, setLight] = useState(Math.random() * 100)
  const [alpha, setAlpha] = useState(1)

  useEffect(() => {})

  return (
    <>
      <section className="leftSide">
        <h1>Color</h1>
        <section
          className="colorBox"
          style={{
            backgroundColor: `hsla(${hue},
        ${saturation}%,
        ${light}%,${alpha})`,
          }}
        ></section>
        <h2>
          HSLA: {hue}, {saturation}%,
          {light}%, {alpha}
        </h2>
      </section>
      <section className="rightSide">
        <section className="H">
          <p>Hue</p>
          <input
            onChange={setHue}
            type="range"
            className="hue"
            name="hue"
            min="0"
            max="360"
            value={hue}
          ></input>
        </section>
        <section className="S">
          <p>Saturation</p>
          <input
            onChange={setSaturation}
            type="range"
            className="hue"
            name="hue"
            min="0"
            max="360"
            value={saturation}
          ></input>
        </section>
        <section className="L">
          <p>Light</p>
          <input
            onChange={setLight}
            type="range"
            className="light"
            name="light"
            min="0"
            max="100"
            value={light}
          ></input>
        </section>
        <section className="A">
          <p>Alpha</p>
          <input
            onChange={setHue}
            type="range"
            className="alpha"
            name="alpha"
            min="0"
            max="1"
            step=".01"
            value={alpha}
          ></input>
        </section>
      </section>
    </>
  )
}

export default ColorSlider
