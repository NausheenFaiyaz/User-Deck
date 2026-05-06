import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWindowMinimize,
  faWindowMaximize,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <header className="top-window">
      <div className="window-title-row">
        <p className="window-site">userdeck.ui</p>
        <div className="window-controls" aria-hidden="true">
          <span>{<FontAwesomeIcon icon={faWindowMinimize} className="window-icon" />}</span>
          <span>{<FontAwesomeIcon icon={faWindowMaximize} className="window-icon" />}</span>
          <span>{<FontAwesomeIcon icon={faWindowClose} className="window-icon" />}</span>
        </div>
      </div>
      <h1>User Deck</h1>
      <p className="subtitle">A deck full of real people.</p>
    </header>
  )
}

export default Header
