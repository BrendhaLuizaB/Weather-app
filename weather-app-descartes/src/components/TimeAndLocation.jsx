import React from "react";
import { formatToLocalTime } from "../services/index.js";
import { ContainerLocationTittle } from "./Styles/TimeAndLocation.js/index.js";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <ContainerLocationTittle>
      <div>
        <p style={{ fontSize: "30px", fontWeight: "normal", color: "#ffff" }}>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div style={{ fontSize: "20px", fontWeight: "normal", color: "#ffff" }}>
        <p>{`${name}, ${country}`}</p>
      </div>
    </ContainerLocationTittle>
  );
}

export default TimeAndLocation;
