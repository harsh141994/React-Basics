import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Harsh" body="Body1" />
        <Post author="Varshney" body="Body2" />
      </ul>
    </>
  );
}

export default PostsList;
