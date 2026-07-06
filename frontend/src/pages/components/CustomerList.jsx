import { useEffect, useState } from "react";

function CustomerList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(res => {
        setUsers(res.users);
        setFilteredUsers(res.users);
      });
  }, []);

  const handleChange = (event) => {
    const gender = event.target.value;

    if (gender === "all") {
      setFilteredUsers(users);
    } else {
      const result = users.filter(user => user.gender === gender);
      setFilteredUsers(result);
    }
  };

  return (
    <div className="p-4">
      <h4 className="text-muted">Customers List:</h4>

      <div className="mb-3">
        <label>Gender: </label>

        <select onChange={handleChange}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <table className="table border">
        <thead>
          <tr className="bg-dark text-white">
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td className="p-2">{u.firstName}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;