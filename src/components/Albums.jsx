import React, { useEffect } from "react";
import { useState } from "react";
import AlbumPhotos from "./AlbumPhotos";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const URL = "https://64bb90717b33a35a44467897.mockapi.io/";

  const handleTitleClick = async (e) => {
    setCurrentIndex(e.target.dataset.id);
  };

  const handleCloseClick = () => {
    setCurrentIndex(-1);
  };

  useEffect(() => {
    const getAlbums = async () => {
      setError("");

      fetch(URL + "albums")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
          setAlbums(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    getAlbums();
  }, []);

  if (error) {
    return <div className="error-box">{error}</div>;
  }

  return (
    <div>
      <button onClick={handleCloseClick}>Close all</button>

      {albums &&
        albums.map((album) => (
          <div key={album.id} className="title-row">
            <div>
              <span className="title">
                <b>{album.title}</b>
              </span>
              <button data-id={album.id} onClick={handleTitleClick}>
                Load Photos
              </button>
            </div>

            {parseInt(album.id) === parseInt(currentIndex) && <AlbumPhotos albumId={album.id} />}
          </div>
        ))}
    </div>
  );
};

export default Albums;
