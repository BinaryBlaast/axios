// App.js
import React, { useState, useEffect } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from './userService';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (newUser) => {
    try {
      const addedUser = await addUser(newUser);
      setUsers([...users, addedUser]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await updateUser(updatedUser.id, updatedUser);
      setUsers(users.map((user) => (user.id === response.id ? response : user)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <UserForm
        onSubmit={editingUser ? handleUpdateUser : handleAddUser}
        initialUser={editingUser}
      />
      <UserList
        users={users}
        onDeleteUser={handleDeleteUser}
        onEditUser={handleEditUser}
      />
    </div>
  );
};

export default App;