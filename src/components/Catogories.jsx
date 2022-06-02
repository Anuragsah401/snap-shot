import React from "react";
import { useNavigate } from "react-router-dom";

const Catogories = () => {
  const navigate = useNavigate();

  const listItems = [
    {
      id: 1,
      name: "food",
    },
    {
      id: 2,
      name: "mountain",
    },
    {
      id: 3,
      name: "beaches",
    },
    {
      id: 4,
      name: "birds",
    },
  ];

  const navigateHandler = (name) => {
    navigate(`/${name}`, { replace: true });
  };

  return (
    <div>
      <ul className="list-unstyled d-flex gap-4 justify-content-center flex-column flex-md-row">
        {listItems.map((item, index) => {
          return (
            <li
              onClick={() => navigateHandler(item.name)}
              key={index}
              className="catogories py-1 px-4 rounded text-capitalize"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catogories;
