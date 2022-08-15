import styles from "./styles.module.scss";
import { BodyPages } from "../../components/BodyPages";
import { HeaderPages } from "../../components/HeaderPages";
import { BodyHeaderDetail } from "../../components/BodyHeaderDetail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
export function IssueDetail() {
  const { postList } = useContext(UserContext);
  const { id } = useParams();
  const post = postList.items.filter((item) => {
    return item.id === Number(id);
  });
  return (
    <div className={styles.homeConteiner}>
      <HeaderPages />
      <BodyPages>
        <BodyHeaderDetail post={post[0]} />
      </BodyPages>
    </div>
  );
}
