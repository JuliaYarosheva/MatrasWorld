import Logo from "../svg/Logo";
import styles from "./PageHeader.module.scss";

const PageHeader = () => {
  return (
    <div className="site-layout--default site-layout--primary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className={styles.pageHeader}>
              <Logo />
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
