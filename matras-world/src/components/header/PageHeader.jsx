import Logo from "../Logo";
import styles from "./PageHeader.module.scss";

const PageHeader = () => {
  return (
    <header className={styles.pageHeader}>
      <Logo />
    </header>
  );
};

export default PageHeader;
