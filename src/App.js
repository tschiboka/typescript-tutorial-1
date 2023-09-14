import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const onAddUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <div className="App">
      <div className="users">
        <UserForm onAddUser={onAddUser} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
