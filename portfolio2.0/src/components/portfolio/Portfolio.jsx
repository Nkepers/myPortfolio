import { useState } from 'react'
import AppList from '../appList/AppList'
import './portfolio.scss'


export default function Portfolio() {
  const [selected, setSelected] = useState('rendatevous')
  const list = [
    {
      id: 'rendatevous',
      title: 'RenDATEvous'
    },
    {
      id: 'budgetTracker',
      title: 'Budget Tracker'
    },
    {
      id: 'app2',
      title: 'App 2'
    }
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <AppList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <a href="https://rendatevous.herokuapp.com/">
            <img
              src="assets/rendatevous.png"
              alt="main page of rendatevous" />
          </a>
          <h3>RenDATEvous</h3>
        </div>
        <div className="item">
          <a href="https://newbudgetappcreation.herokuapp.com/">
            <img
              src="assets/budgetTracker.png"
              alt="main page of budget tracker" />
          </a>
          <h3>Budget Tracker</h3>
        </div>
        <div className="item">
          <a href="https://rendatevous.herokuapp.com/">
            <img
              src="assets/rendatevous.png"
              alt="main page of rendatevous" />
          </a>
          <h3>RenDATEvous</h3>
        </div>
      </div>
    </div>
  )
}
