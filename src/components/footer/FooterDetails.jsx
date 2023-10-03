import { useId } from "react";
import styles from "./PageFooter.module.scss";
import { footerDetailsItems } from "../../data/fakeData";

const FooterDetails = () => {
  return (
    <div className={styles.footerDetailsBlock + " col-6 col-lg-3"}>
      <h6 className={styles.footerDetailsTitle}>Contacts</h6>
      <ul>
        {footerDetailsItems.map((item) => {
          const id = useId();

          return (
            <li key={id} className={styles.footerDetailsItem}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterDetails;
