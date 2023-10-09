import { slide as Menu } from "react-burger-menu";
import HamburgerIcon from "./HamburgerIcon";
import NavMenuContent from "./NavMenuContent";

const MobileNavigation = ({ styles }) => {
  return (
    <div className={styles.hamburger}>
      <Menu
        customBurgerIcon={<HamburgerIcon styles={styles} />}
        width={"75%"}
        className={styles.hamburgerPosition}
      >
        <div>
          <NavMenuContent styles={styles} />
        </div>
      </Menu>
    </div>
  );
};

export default MobileNavigation;
