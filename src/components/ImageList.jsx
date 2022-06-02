import React from "react";
import { Link } from "react-router-dom";

function ImageList(props) {
  return (
    <div className="mt-5 row row-cols-4 justify-content-center">
      {props.images.length > 0 ? (
        props.images.map((image) => {
          const { farm } = image;
          const { server } = image;
          const { id } = image;
          const { secret } = image;
          const { title } = image;
          const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
          return (
            <div key={id} className="img-container mb-4">
              <Link to={id} target="_blank">
                <img src={url} alt={title} />
              </Link>
            </div>
          );
        })
      ) : (
        <h3 className="text-center">No Images Found</h3>
      )}
    </div>
  );
}

export default ImageList;
