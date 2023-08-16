import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Error from "../Templates/Error";
import Loading from "../Templates/Loading";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const Posts = () => {
  const { userId } = useParams();
  const options = useMemo(() => {
    return {userId: userId}
  }, [userId]);
  const { data, error, isLoading, refetch } = useFetch("posts", options);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
        <h1>User id: {userId}</h1>
        <Button onClick={() => refetch()}>Refetch</Button>
      <ul>
        {data.length > 0 &&
          data.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default Posts;
