import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface cardProps {
  post: {
    html_url: string;
    id: number;
    user: { login: string };
    title: string;
    comments: number;
    body: string;
    created_at: string | null;
  };
}

export function CardPost(cardProps: cardProps) {
  const navigate = useNavigate();

  const goToDetailsPage = (id: number) => {
    navigate(`/detail/${String(id)}`);
  };

  const post = cardProps.post;
  const date = new Date(post.created_at as string);
  console.log(date);
  const dateFormatted = post.created_at
    ? formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
      })
    : "";
  return (
    <div className={styles.card} onClick={() => goToDetailsPage(post.id)}>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postResume}>{post.body}</p>
      <span className={styles.postDate}>{dateFormatted}</span>
    </div>
  );
}
