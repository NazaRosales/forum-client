import { useEffect, useState } from "react";
import { getFeedPosts } from "../../helpers/getFeedPosts";
import styles from "./Feed.module.css";
const Feed = (): JSX.Element => {
  const [postList, setPostList] = useState<Array<Post> | null>();
  useEffect(() => {
    async function getPosts() {
      setPostList(await getFeedPosts());
    }
    getPosts();
  }, []);
  return (
    <section className={styles.container}>
      {postList?.length &&
        postList?.map((post) => (
          <div key={post?.id}>
            <small>{post?.id}</small>
            <p>{post?.title}</p>
            <p>{post?.body}</p>
          </div>
        ))}
    </section>
  );
};
export { Feed };
