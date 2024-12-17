import styles from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => (
  <div className={styles.item_wrapper}>
    <li className={styles.contact_item}>
      <p className={styles.contact_info}>
        {name}: {number}
      </p>
      <button className={styles.contact_btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  </div>
);

export default Contact;
