import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface IPost {
  userId: string;
  description: string;
  title: string;
  username: string;
  id: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<IPost[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <h1>
      {postsList?.map((post) => (
        <Post post={post} />
      ))}
    </h1>
  );
};
