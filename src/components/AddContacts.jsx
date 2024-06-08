import { useState } from 'react';
import './AddContacts.css';

const AddContacts = ({ addcontact }) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  function handleChange(event) {
    setContactData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  function handleAdd(event) {
    event.preventDefault();
    console.log('Contact Added:', contactData);
    if(contactData.name === "" || contactData.email === ""){
      alert("please fill all fields");
      return;
    }
    addcontact(contactData);
    setContactData({ name: "", email: "" });
  }

  return (
    <>
      <h1>Add Contacts</h1>
      <form className="contact-form" onSubmit={handleAdd}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
}

export default AddContacts;
