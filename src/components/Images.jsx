import React from "react";
// eslint-disable-next-line import/no-unresolved
import { useImageContext } from "Context/ImagesContext";

import Loading from "./Loading";
import ImageList from "./ImageList";

const Images = () => {
  const { images, keyword, loading } = useImageContext();
  return (
    <div className="mt-5">
      <h2 className="text-center text-capitalize">{keyword} Pictures</h2>
      {!loading ? (
        <ImageList images={images} />
      ) : (
        <div className="text-center mt-5">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Images;
