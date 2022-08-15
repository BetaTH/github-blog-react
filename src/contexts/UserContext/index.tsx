import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { api } from "../../api/api";

interface UserContextProps {
  children: ReactNode;
}
interface IUserContext {
  userData: {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
    html_url: string;
  };
  setUserData: (newState: any) => void;
  postList: {
    total_count: number;
    items: {
      html_url: string;
      id: number;
      user: { login: string };
      title: string;
      comments: number;
      body: string;
      created_at: string | null;
    }[];
  };
  setPostList: (newState: any) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
}

const initValues = {
  userData: {
    avatar_url: "",
    name: "",
    bio: "",
    login: "",
    company: "",
    followers: 0,
    html_url: "",
  },
  setUserData: () => {},
  postList: {
    total_count: 0,
    items: [
      {
        html_url: "",
        id: 0,
        user: { login: "" },
        title: "",
        comments: 0,
        body: "",
        created_at: null,
      },
    ],
  },
  setPostList: () => {},
  isLoading: true,
  setIsLoading: () => {},
};

export const UserContext = createContext<IUserContext>(initValues);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userData, setUserData] = useState(initValues.userData);
  const [isLoading, setIsLoading] = useState(initValues.isLoading);
  const [postList, setPostList] = useState(initValues.postList);
  const effecOnlyRun = useRef(false);

  useEffect(() => {
    if (effecOnlyRun.current === false) {
      api.get("users/BetaTH").then((res) => setUserData(res.data));
      api
        .get("search/issues?q=%20repo:BetaTH/github-blog-react")
        .then((res) => setPostList(res.data));
    }
    return () => {
      effecOnlyRun.current = true;
    };
  }, []);

  const values = {
    userData,
    setUserData,
    postList,
    setPostList,
    isLoading,
    setIsLoading,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
