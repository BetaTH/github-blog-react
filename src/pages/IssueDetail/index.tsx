import styles from "./styles.module.scss";
import { PagesLayout } from "../../components/PagesLayout";
import { BodyHeaderDetail } from "../../components/BodyHeaderDetail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IssueDetailConteiner } from "../../components/IssueDetailConteiner";
export function IssueDetail() {
  const { postList } = useContext(UserContext);
  const { id } = useParams();
  const post = postList.items.filter((item) => {
    return item.id === Number(id);
  });

  return (
    <div className={styles.detailConteiner}>
      <PagesLayout>
        <BodyHeaderDetail post={post[0]} />
        <IssueDetailConteiner post={post[0]} />
      </PagesLayout>
    </div>
  );
}
