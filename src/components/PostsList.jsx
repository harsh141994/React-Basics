import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("Initial Body");
  const [enteredAuthor, setEnteredAuthor] = useState("Initial Author");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function bodyChangeHandler(event) {
    // event is something we automatically get when used with event listener
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          {/* // passing the function bodyChangeHandler in props to the NewPost */}
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Varshney" body="second body" />
      </ul>
    </>
  );
}

export default PostsList;
