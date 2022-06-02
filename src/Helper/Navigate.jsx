import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/food");
  });

  return <></>;
};

export default Navigate;
