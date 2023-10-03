import styles from "./SearchInput.module.scss";
import Lens from "./svg/Lens";

const SearchInput = () => {
  return (
    <div className="col-sm-12 col-lg-3 offset-sm-0 offset-lg-3">
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <button type="submit" className={styles.searchIcon}>
          <Lens />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
