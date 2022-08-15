import { ReactNode } from "react";
import styles from "./styles.module.scss";
import logo from "../../img/headerLogo.svg";
import effectLeft from "../../img/headerEffectLeft.svg";
import effectRight from "../../img/headerEffectRight.svg";
import ellipseLeft from "../../img/headerEllipseLeft.svg";
import ellipseRight from "../../img/headerEllipseRight.svg";
import rectangle from "../../img/headerRectangle.svg";

interface BodyPagesProps {
  children: ReactNode;
}

export function PagesLayout({ children }: BodyPagesProps) {
  return (
    <>
      <div className={styles.homeHeader}>
        <img src={effectLeft} alt="effectLeft" className={styles.effectLeft} />
        <img src={logo} alt="logo" className={styles.logo} />
        <img
          src={effectRight}
          alt="effectRight"
          className={styles.effectRight}
        />
        <img
          src={ellipseLeft}
          alt="ellipseLeft"
          className={styles.ellipseLeft}
        />
        <img
          src={ellipseRight}
          alt="ellipseRight"
          className={styles.ellipseRight}
        />
        <img src={rectangle} alt="rectangle" className={styles.rectangle} />
      </div>
      <div className={styles.homeBody}>
        <>{children}</>
      </div>
    </>
  );
}
