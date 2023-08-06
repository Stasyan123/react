import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const PostElement = ({ post }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}-element`}>
      <h5>
        <b>{post.title}</b>
      </h5>
      <p>{post.body}</p>
    </div>
  );
};

export default PostElement;
