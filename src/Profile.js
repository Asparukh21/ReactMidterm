import React, { useState } from "react";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Asparukh",
    surname: "Sultan-Murat",
    birthday: "03/21/2002",
    email: "@example.com",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-picture">
        <img src="" alt="Profile" />
      </div>
      <form className="profile-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Birthday:
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
