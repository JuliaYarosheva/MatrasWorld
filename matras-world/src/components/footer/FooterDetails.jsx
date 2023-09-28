import styles from "./PageFooter.module.scss";
import { footerDetailsItems } from "../../data/fakeData";

const FooterDetails = () => {
  return (
    <div>
      <h6 className={styles.footerDetailsTitle}>Contacts</h6>
      <ul>
        {footerDetailsItems.map((item) => {
          return <li className={styles.footerDetailsItem}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterDetails;
