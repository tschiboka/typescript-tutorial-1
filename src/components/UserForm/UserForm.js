import React, { useState } from 'react';

const UserForm = ({onAddUser}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) onAddUser({name, email});
    setName("");
    setEmail("");
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="UserForm">
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={name} onChange={event => setName(event.target.value)} />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" value={email} onChange={event => setEmail(event.target.value)}/>
            </fieldset>
            <fieldset>
              <button>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default UserForm