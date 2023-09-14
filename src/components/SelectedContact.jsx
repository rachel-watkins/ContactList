import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


export default function SelectContact({selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchSelected(id) {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchSelected(selectedContactId);
  }, [])


  return (
    <>
    <div>
      <h2>Contact Details: {contact ? contact.id : ''}</h2>
      <div>Name: {contact ? contact.name : ''}</div>
      <div>Username: {contact ? contact.username: ''}</div>
      <div>Email: {contact ? contact.email : ''}</div>
      <div>Phone: {contact ? contact.phone : ''}</div>
      <div>Website: {contact ? contact.website : ''}</div>
      
    </div>
  </>
  );
}