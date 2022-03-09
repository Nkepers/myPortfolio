import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay:  1000,
      backSpeed: 70,
      strings: ['Designer', 'Developer', 'Engineer'],
    })
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src='assets/portrait.png' alt='myPortrait' />
        </div>
      </div>

      <div className='right'>
        <div className='wrapper'>
          <h2>Hello there, I am</h2>
          <h1>Nicholas Kepers</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downArrow.png" alt="downArrow" />
        </a>
      </div>
    </div>
  )
}
