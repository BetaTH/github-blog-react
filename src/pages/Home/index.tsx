import styles from "./styles.module.scss";
import { PagesLayout } from "../../components/PagesLayout";
import { CardPost } from "../../components/CardPost";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BodyHeaderHome } from "../../components/BodyHeaderHome";
import { SearchPostsHome } from "../../components/SearchPostsHome";
export function Home() {
  const { postList } = useContext(UserContext);

  return (
    <div className={styles.homeConteiner}>
      <PagesLayout>
        <BodyHeaderHome />
        <SearchPostsHome />
        <div className={styles.cardsConteiner}>
          {postList.items.map((post) => {
            return <CardPost key={post.id} post={post} />;
          })}
        </div>
      </PagesLayout>
    </div>
  );
}
