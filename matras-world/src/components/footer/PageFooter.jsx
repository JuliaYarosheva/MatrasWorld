import styles from "./PageFooter.module.scss";
import Logo from "../svg/Logo";
import FooterDetails from "./FooterDetails";

const PageFooter = () => {
  return (
    <div className="site-layout--secondary site-layout--footer">
      <footer className={styles.pageFooter}>
        <div className="container">
          <div className="row">
            <div className={styles.logoContainer + " col-3"}>
              <Logo />
            </div>
            <div className={styles.footerDetailsContainer + " col-8 offset-1"}>
              <FooterDetails />
              <FooterDetails />
              <FooterDetails />
              <FooterDetails />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageFooter;
