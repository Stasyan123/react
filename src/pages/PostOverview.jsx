import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { LoadingContext } from "../components/LoadingContextProvider";
import PostElement from "../components/PostElement";



const PostOverview = () => {
  const {isLoading, error, setIsLoading, setError} = useContext(LoadingContext)
  const [post, setPost] = useState({});
  const { postId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    setError(null)

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
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false)
        })

        return () => {
          setIsLoading(false)
          setError(null);
        }
  }, [postId])


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="error-box">{error}</div>;
  }

  return (
    <div>
      <PostElement post={post} />
    </div>
  );
};

export default PostOverview;
