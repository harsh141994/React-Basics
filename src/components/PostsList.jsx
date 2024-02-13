import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("Initial Body");
  const [enteredAuthor, setEnteredAuthor] = useState("Initial Author");

  function bodyChangeHandler(event) {
    // event is something we automatically get when used with event listener
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {/* // passing the function bodyChangeHandler in props to the NewPost */}
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Varshney" body="second body" />
      </ul>
    </>
  );
}

export default PostsList;
