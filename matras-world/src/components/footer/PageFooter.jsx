import styles from "./PageFooter.module.scss";
import Logo from "../Logo";
import FooterDetails from "./FooterDetails";

const PageFooter = () => {
  return (
    <footer className={styles.pageFooter}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.footerDetailsContainer}>
        <FooterDetails />
        <FooterDetails />
        <FooterDetails />
        <FooterDetails />
      </div>
    </footer>
  );
};

export default PageFooter;
