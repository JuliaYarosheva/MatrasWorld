import styles from "./PageFooter.module.scss";
import Logo from "../svg/Logo";
import FooterDetails from "./FooterDetails";

const PageFooter = () => {
  return (
    <div className="site-layout--secondary site-layout--footer">
      <footer className={styles.pageFooter}>
        <div className="container">
          <div className="row">
            <div className={styles.logoContainer + " col-sm-12 col-md-3"}>
              <Logo />
            </div>
            <div
              className={
                styles.footerDetailsContainer +
                " col-sm-12 col-md-8 offset-sm-0 offset-md-1"
              }
            >
              <div className="container">
                <div className="row">
                  <FooterDetails />
                  <FooterDetails />
                  <FooterDetails />
                  <FooterDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageFooter;
