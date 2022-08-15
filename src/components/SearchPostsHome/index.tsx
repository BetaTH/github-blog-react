import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function SearchPostsHome() {
  const { postList } = useContext(UserContext);
  return (
    <div className={styles.searchConteiner}>
      <div className={styles.searchHeader}>
        <span className={styles.searchSpan}>Pesquisar</span>
        <span className={styles.countPubSpan}>
          {postList.total_count} publicações
        </span>
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Buscar Conteúdo"
      />
    </div>
  );
}
