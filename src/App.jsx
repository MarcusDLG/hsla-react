import React, { useState, useEffect } from 'react'

const ColorSlider = () => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [light, setLight] = useState(Math.round(Math.random() * 100))
  const [alpha, setAlpha] = useState((Math.random() * 1).toFixed(2))

  const updateHue = (e) => {
    const h = e.target.value
    setHue(h)
  }
  const updateSaturation = (e) => {
    const s = e.target.value
    setSaturation(s)
  }
  const updateLight = (e) => {
    const l = e.target.value
    setLight(l)
  }
  const updateAlpha = (e) => {
    const a = e.target.value
    setAlpha(a)
  }

  const randomColor = () => {
    const h = Math.round(Math.random() * 360)
    const s = Math.round(Math.random() * 100)
    const l = Math.round(Math.random() * 100)
    const a = (Math.random() * 1).toFixed(2)

    setHue(h)
    setSaturation(s)
    setLight(l)
    setAlpha(a)
  }

  return (
    <>
      <main>
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
            HSLA: {hue}, {saturation}%, {light}%, {alpha}
          </h2>
        </section>
        <section className="rightSide">
          <section className="H">
            <p>Hue</p>
            <input
              onChange={updateHue}
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
              onChange={updateSaturation}
              type="range"
              className="hue"
              name="hue"
              min="0"
              max="100"
              value={saturation}
            ></input>
          </section>
          <section className="L">
            <p>Light</p>
            <input
              onChange={updateLight}
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
              onChange={updateAlpha}
              type="range"
              className="alpha"
              name="alpha"
              min="0"
              max="1"
              step=".01"
              value={alpha}
            ></input>
          </section>
          <button className="random" onClick={randomColor}>
            Random Color
          </button>
        </section>
      </main>
    </>
  )
}

export default ColorSlider
