
import UserCard from './UserCard';

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDeleteUser={onDeleteUser}
            onEditUser={onEditUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;