import './portfolio.scss'

export default function Portfolio() {

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>

      <h2>
        Here you will find some of my previous work!
      </h2>

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
          <a href="https://mynewnotetaker.herokuapp.com/">
            <img
              src="assets/noteTaker.png"
              alt="main page of note taker" />
          </a>
          <h3>Note Taking App</h3>
        </div>
      </div>
    </div>
  )
}
