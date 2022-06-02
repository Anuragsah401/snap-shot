import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImagesContext = createContext();

export const useImageContext = () => {
  return useContext(ImagesContext);
};

export const ImageProvider = (props) => {
  const { keyword } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[${keyword}]&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        localStorage.setItem("Images", JSON.stringify(res.data.photos.photo));
        const data = JSON.parse(localStorage.getItem("Images"));
        setImages(data);
        setLoading(false);
      });
  }, [keyword]);

  return (
    <ImagesContext.Provider
      value={{
        images,
        setImages,
        keyword,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};
