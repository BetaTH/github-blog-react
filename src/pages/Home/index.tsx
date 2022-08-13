import styles from "./styles.module.scss";
import { HeaderPages } from "../../components/HeaderPages";
export function Home() {
  return (
    <div className={styles.homeConteiner}>
      <HeaderPages />
      <div className={styles.homeBody}>
        <div className={styles.bodyHeader}></div>
      </div>
    </div>
  );
}
