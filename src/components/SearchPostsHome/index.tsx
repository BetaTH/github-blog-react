import styles from "./styles.module.scss";
import { useContext, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";

export function SearchPostsHome() {
  const { postList, setSearch, search } = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);

  function handlerSubmit(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setSearch(inputRef.current?.value as string);
  }

  return (
    <form
      className={styles.searchConteiner}
      onSubmit={(event) => {
        handlerSubmit(event);
      }}
    >
      <div className={styles.searchHeader}>
        <span className={styles.searchSpan}>Pesquisar</span>
        <span className={styles.countPubSpan}>
          {postList.total_count} publicações
        </span>
      </div>
      <input
        defaultValue={search}
        ref={inputRef}
        className={styles.searchInput}
        type="text"
        placeholder="Buscar Conteúdo"
        onBlur={() => (inputRef.current?.value === "" ? handlerSubmit() : null)}
      />
    </form>
  );
}
