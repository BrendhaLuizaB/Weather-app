import React from "react";
import { iconUrlFromCode } from "../services/index.js";
import {
  ContainerEveryForecast,
  ContainerForecast,
  Tittle,
} from "./Styles/Forecast/forecast.styled.js";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div>
      <Tittle>
        <p style={{ fontSize: "40px", color: "#ffff", fontWeight: "bold" }}>
          {title}
        </p>
      </Tittle>

      <ContainerForecast>
        {items.map((item, index) => (
          <ContainerEveryForecast style={{ marginRight: "3rem" }} key={index}>
            <p style={{ fontSize: "15px", fontWeight: "bold", color: "#ffff" }}>
              {item.title}
            </p>
            <img src={iconUrlFromCode(item.icon)} alt="" />
            <p
              style={{ fontSize: "25px", color: "#ffff" }}
            >{`${item.temp.toFixed()}°`}</p>
          </ContainerEveryForecast>
        ))}
      </ContainerForecast>
    </div>
  );
}

export default Forecast;
