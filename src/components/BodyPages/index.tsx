import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface BodyPagesProps {
  children: ReactNode;
}

export function BodyPages({ children }: BodyPagesProps) {
  return (
    <div className={styles.homeBody}>
      <>{children}</>
    </div>
  );
}
