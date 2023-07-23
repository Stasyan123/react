import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostOverview = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams()

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "posts/" + postId)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
            setPost(data)
        })
        .catch((error) => {
          console.log(error.message);
        })
  }, [postId])

  return (
    <div>
      {post && post.id && (
        <div>
          <h5>
            <b>{post.title}</b>
          </h5>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostOverview;
