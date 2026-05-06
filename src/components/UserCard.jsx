import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBirthdayCake,
  faEnvelope,
  faLocationDot,
  faPhone,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons'

function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="card-header">
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <div>
          <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <p className="username">@{user.login.username}</p>
        </div>
      </div>

      <ul>
        <li>
          <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
          <span>{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          <span>{user.email}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="fa-icon" />
          <span>{user.phone}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBirthdayCake} className="fa-icon" />
          <span>{`Age ${user.dob.age}`}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faVenusMars} className="fa-icon" />
          <span>{`${user.gender.charAt(0).toUpperCase()}${user.gender.slice(1)}`}</span>
        </li>
      </ul>
    </article>
  )
}

export default UserCard
