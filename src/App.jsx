import ContactList from "./components/ContactList";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact";
import './App.css'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
      <SelectedContact selectedContactId={selectedContactId}>Selected Contact View</SelectedContact>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )}
    </>
  );
}