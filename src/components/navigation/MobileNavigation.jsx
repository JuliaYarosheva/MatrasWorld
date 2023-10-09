import NavMenuContent from "./NavMenuContent";

const MobileNavigation = ({ styles }) => {
  return (
    <div className={styles.hamburger}>
      <div>
        <NavMenuContent styles={styles} />
      </div>
    </div>
  );
};

export default MobileNavigation;
