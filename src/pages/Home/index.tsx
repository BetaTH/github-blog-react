import styles from "./styles.module.scss";
import { HeaderPages } from "../../components/HeaderPages";
import { BodyPages } from "../../components/BodyPages";
import { CardPost } from "../../components/CardPost";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BodyHeaderHome } from "../../components/BodyHeaderHome";
import { SearchPostsHome } from "../../components/SearchPostsHome";
export function Home() {
  const { postList } = useContext(UserContext);

  return (
    <div className={styles.homeConteiner}>
      <HeaderPages />
      <BodyPages>
        <BodyHeaderHome />
        <SearchPostsHome />
        <div className={styles.cardsConteiner}>
          {postList.items.map((post) => {
            return <CardPost key={post.id} post={post} />;
          })}
        </div>
      </BodyPages>
    </div>
  );
}
