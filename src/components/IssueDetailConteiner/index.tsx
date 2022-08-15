import styles from "./styles.module.scss";

interface IssueDetailConteinerProps {
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

export function IssueDetailConteiner(
  IssueDetailConteinerProps: IssueDetailConteinerProps
) {
  const post = IssueDetailConteinerProps.post;
  return (
    <div className={styles.bodyIssueConteiner}>
      <h1 className={styles.bodyIssue}>{post.body}</h1>
    </div>
  );
}
