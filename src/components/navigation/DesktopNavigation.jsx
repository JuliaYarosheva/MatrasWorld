import NavMenuContent from "./NavMenuContent";

const DesktopNavigation = ({ styles }) => {
  return (
    <nav className={styles.navbar + " navbar navbar-expand"}>
      <div className="container-fluid container">
        <div
          className="collapse navbar-collapse row"
          id="navbarNavDarkDropdown"
        >
          <NavMenuContent styles={styles} />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
