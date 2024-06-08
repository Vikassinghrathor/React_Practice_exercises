import { useState } from "react";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
  const [contact, setContact] = useState([]);

  const addcontact = (data) => {
    setContact(prevContacts => [...prevContacts, data]);
  };

  return (
    <>
      <Header />
      <AddContacts addcontact={addcontact} />
      <ContactList contact={contact} />
    </>
  );
}

export default App;
