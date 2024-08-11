import { useState } from "react";
import "./App.css";

const Modal = ({ setIsClicked }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleBGClick = () => {
    setIsClicked(false);
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
    // setIsClicked(false);
    setFormData((prev) => ({
      ...prev,
      username: "",
      email: "",
      phone: "",
      dob: "",
    }));
  };

  const checkValidation = () => {
    // regEx for email is: ^[^\s@]+@[^\s@]+\.[^\s@]+$
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // alert();
      return;
    }

    if (formData.phone.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();

    if (inputDate > currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    setIsClicked(false);
  };

  return (
    <div className="modal" onClick={handleBGClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label>Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Phone Number:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Date of Birth:</label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
