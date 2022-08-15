import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Loading } from "../Loading";

export function BodyHeaderHome() {
  const { userData, isLoading } = useContext(UserContext);
  return (
    <div className={styles.bodyHeader}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <img src={userData.avatar_url as string} className={styles.photo} />
          <div className={styles.infosConteiner}>
            <h1 className={styles.name}>{userData.name as string}</h1>
            <p className={styles.about}>{userData.bio as string}</p>
            <div className={styles.social}>
              <div className={styles.socialCard}>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                <span className={styles.span}>{userData.login as string}</span>
              </div>
              <div className={styles.socialCard}>
                <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
                <span className={styles.span}>
                  {userData.company as string}
                </span>
              </div>
              <div className={styles.socialCard}>
                <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
                <span className={styles.span}>
                  {userData.followers as number} Seguidores
                </span>
              </div>
            </div>
          </div>
          <button className={styles.gitButton}>
            <a
              className={styles.btnLink}
              href={userData.html_url as string}
              target="_blank"
            >
              github
            </a>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.btnIcon}
            />
          </button>
        </>
      )}
    </div>
  );
}
