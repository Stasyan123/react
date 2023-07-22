import React, { useEffect, useState } from "react";

const AlbumPhotos = ({ albumId }) => {
  const [isWindowCLicked, setIsWindowCLicked] = useState(false);

  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://64bb90717b33a35a44467897.mockapi.io/";

  useEffect(() => {
    const albumPhotos = async () => {
      setIsLoading(true);

      fetch(URL + "albumPhotos")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
            setAlbumPhotos(data)
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const handleClick = () => {
      setIsWindowCLicked(true);

      setTimeout(() => {
        setIsWindowCLicked(false);
      }, 3000);
    };

    window.addEventListener("click", handleClick);
    albumPhotos()

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <div className="photos-container">
    <div className={isWindowCLicked ? "redBorders" : ""}>
        {albumPhotos && albumPhotos.filter(photo => photo.albumId === albumId).map((photo) => (
            <img alt="Wait pls" className="thumb" src={photo.thumbnailUrl} />
        ))}
    </div>
  </div>;
};

export default AlbumPhotos;
