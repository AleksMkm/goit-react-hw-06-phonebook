import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import styles from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/selectors';
import actions from '../../redux/actions';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const displayedContacts = filter.trim() ? filteredContacts() : contacts;

  return (
    <ul className={styles.contactList}>
      {displayedContacts.map(contact =>
        Contact({
          id: contact.id,
          name: contact.name,
          phone: contact.number,
          deleteHandler: () => dispatch(actions.deleteContact(contact.id)),
        }),
      )}
    </ul>
  );
}

export default ContactList;
