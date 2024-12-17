import styles from "./SearchForm.module.css";
const SearchBox = ({ filter, onChange }) => (
  <div>
    <label className={styles.list_body}>
      <p className={styles.text_body}>Find contacts by name:</p>
      <input
        className={styles.input_body}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  </div>
);

export default SearchBox;
