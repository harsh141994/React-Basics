import { useState } from "react";

import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts; //backend is sending the json which has "posts" key in it
}
