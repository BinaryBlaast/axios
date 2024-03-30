// UserCard.js

const UserCard = ({ user, onDeleteUser, onEditUser }) => {
  const handleDeleteClick = () => {
    onDeleteUser(user.id);
  };

  const handleEditClick = () => {
    onEditUser(user);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{user.name}</h3>
      <p className="text-gray-700">
        <span className="font-bold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Website:</span> {user.website}
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;