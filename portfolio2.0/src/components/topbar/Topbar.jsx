import './topbar.scss'
import { Home, Person, Mail } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className="left">
          <a href='#intro' className='logo'><Home className='iconMain'/></a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+1 (928)273-7027</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>nick.kepers.coder@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
            </div>
        </div>
      </div>
    </div>
  )
}
