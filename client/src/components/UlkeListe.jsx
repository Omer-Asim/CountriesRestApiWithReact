import React from "react";
import { Link } from "react-router-dom";
const UlkeListe = (props) => {
  return (
    <Link to={`/detay/${props.ulkeisim}`}>
      <div className="shadow-sm p-1 mt-2 border border-secondary rounded">
        <img width="24px" alt="" src={props.bayrak} />
        <div className="d-inline-block pl-2">{props.ulkeisim}</div>
      </div>
    </Link>
  );
};

export default UlkeListe;
