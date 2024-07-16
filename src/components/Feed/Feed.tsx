import styles from "./Feed.module.css";
const Feed = (): JSX.Element => {
  type Post = {
    id: number;
    text: string;
  };
  const postList: Array<Post> = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
    {
      id: 10,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia facere rerum ipsum? Asperiores consequuntur odio fugiat doloremque corporis non aspernatur vero sit veritatis alias officia, voluptates quia repellat iusto ea.",
    },
  ];
  return (
    <section className={styles.container}>
      {postList &&
        postList.map((post: Post) => (
          <div key={post.id}>
            <small>{post.id}</small>
            <p>{post.text}</p>
          </div>
        ))}
    </section>
  );
};
export { Feed };
