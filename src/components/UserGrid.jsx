import UserCard from './UserCard'

function UserGrid({ users }) {
  return (
    <section className="users-grid" aria-live="polite">
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </section>
  )
}

export default UserGrid
