import React from 'react'

const UserList = ({users}) => {
  const renderedUsers = () => {
    return users.map(user => <tr key={user?.email}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>)
  }

  return (
    <div className='UserList'>
      <h3>User List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {renderedUsers()}
        </tbody>
      </table>
    </div>
  )
}

export default UserList