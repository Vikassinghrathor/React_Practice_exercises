import './ContactList.css';

const ContactList = ({ contact }) => {
  const contactList = contact.map((value, index) => {
    return (
      <div key={index} className="contact-item">
        <p>{value.name}</p>
        <p>{value.email}</p>
      </div>
    )
  });

  return (
    <div className="contact-list">
      <h1>Contact List</h1>
      {contactList}
    </div>
  );
};

export default ContactList;
