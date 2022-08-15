import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
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
      <ReactMarkdown
        className={styles.bodyIssue}
        children={post.body}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
}
