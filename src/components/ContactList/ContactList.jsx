import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => (
  <div className={styles.list_wraper}>
    <ul className={styles.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);

export default ContactList;
