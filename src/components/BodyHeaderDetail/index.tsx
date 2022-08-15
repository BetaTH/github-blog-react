import styles from "./styles.module.scss";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

interface headerProps {
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

export function BodyHeaderDetail(headerProps: headerProps) {
  const navigate = useNavigate();
  const post = headerProps.post;
  const date = new Date(post.created_at as string);
  console.log(date);
  const dateFormatted = post.created_at
    ? formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
      })
    : "";
  return (
    <div className={styles.bodyHeader}>
      <div className={styles.buttons}>
        <button
          className={styles.btnBack}
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} className={styles.btnIcon} />
          <span className={styles.btnLink}>voltar</span>
        </button>
        <button className={styles.btnGit}>
          <a className={styles.btnLink} href={post.html_url} target="_blank">
            ver no github
          </a>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.btnIcon}
          />
        </button>
      </div>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <div className={styles.social}>
        <div className={styles.socialCard}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span className={styles.span}>{post.user.login}</span>
        </div>
        <div className={styles.socialCard}>
          <FontAwesomeIcon icon={faCalendarDay} className={styles.icon} />
          <span className={styles.span}>{dateFormatted}</span>
        </div>
        <div className={styles.socialCard}>
          <FontAwesomeIcon icon={faComment} className={styles.icon} />
          <span className={styles.span}>{post.comments} Comentários</span>
        </div>
      </div>
    </div>
  );
}
