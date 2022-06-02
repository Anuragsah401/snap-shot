import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Catogories from "./Catogories";

function Head() {
  const a = 10;
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const onInputHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      navigate(`/${text}`, { replace: true });
    }
  };

  return (
    <div className="head-container text-center">
      <h1 className="my-5 display-3 fw-bold">SnapShot</h1>

      <div className="mb-3">
        <form onSubmit={onSubmitHandler} className="d-flex justify-content-center">
          <input
            type="text"
            className="input-field px-3 py-2 border-2 border-end-0 rounded-start"
            placeholder="Search..."
            onChange={onInputHandler}
          />
          <button type="submit" className="py-2 px-3 border-2 rounded-end">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="white" />
          </button>
        </form>
      </div>

      <div className="mt-5">
        <Catogories />
      </div>
    </div>
  );
}

export default Head;
