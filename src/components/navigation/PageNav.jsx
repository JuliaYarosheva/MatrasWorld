import DesktopNavigation from "./DesktopNavigation";
import styles from "./PageNav.module.scss";
import MobileNavigation from "./MobileNavigation";

const PageNav = () => {
  return (
    <div className="site-layout--secondary site-layout--nav">
      <div className="container">
        <div className="row">
          <div className="col-12 d-none d-md-block">
            <DesktopNavigation styles={styles} />
          </div>
          <div className="col-12 d-block d-md-none">
            <MobileNavigation styles={styles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNav;
