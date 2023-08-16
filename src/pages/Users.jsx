import React from 'react'
import useFetch from '../hooks/useFetch';
import Error from '../Templates/Error';
import Loading from '../Templates/Loading';
import { Link } from 'react-router-dom';

const Users = () => {
    const { data, error, isLoading } = useFetch("users");

    if (error) {
      return <Error />;
    }
  
    if (isLoading) {
      return <Loading />;
    }
  
    return (
      <div>
        <ul>{data.length > 0 && data.map((user) => <li key={user.id}>
        <Link to={`/posts/${user.id}`}>
              <h5>{user.name}</h5>
            </Link>
        </li>)}</ul>
      </div>
    );
}

export default Users