import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { LoadingContext } from "./LoadingContextProvider";

const Posts = () => {
  const {isLoading, error, setIsLoading, setError} = useContext(LoadingContext)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      setError("")

      fetch(process.env.REACT_APP_API_URL + "posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getPosts();

    return () => {
      setIsLoading(false)
      setError(null);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="error-box">{error}</div>;
  }

  if (posts.length <= 0) {
    return <h1>No posts</h1>;
  }

  return (
    <div>
      <div id="top">Posts: </div>
      {posts &&
        <div>
        {posts.map((post) => (
          <div key={post.id} className="title-row">
            <Link to={`/post/${post.id}`}>
              <h5>{post.title}</h5>
            </Link>
          </div>
        ))}
        <Link to="#top">Back to top</Link>
        </div>}
    </div>
  );
};

export default Posts;
