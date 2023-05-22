import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/index.js";
import {
  ContainerRise,
  Details,
  DetailsContainer,
} from "./Styles/temperatureAndDetails/index.js";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div>
        <DetailsContainer>
          <p style={{ fontSize: "40px", fontWeight: "bold", color: "#ffff" }}>
            {details}
          </p>
          <img src={iconUrlFromCode(icon)} alt="" />
          <p
            style={{ fontSize: "70px", fontWeight: "bold", color: "#ffff" }}
          >{`${temp.toFixed()}°`}</p>
        </DetailsContainer>

        <Details>
          <div
            style={{
              marginRight: "3rem",
              fontSize: "20px",
              fontWeight: "normal",
              color: "#ffff",
            }}
          >
            <UilTemperature size={18} />
            Real fell:
            <span
              style={{ fontSize: "20px", fontWeight: "normal", color: "#ffff" }}
            >
              {" "}
              {`${feels_like.toFixed()}°`}
            </span>
          </div>
          <div
            style={{
              marginRight: "3rem",
              fontSize: "20px",
              fontWeight: "normal",
              color: "#ffff",
            }}
          >
            <UilTear size={18} />
            Humidity:
            <span
              style={{ fontSize: "20px", fontWeight: "normal", color: "#ffff" }}
            >
              {" "}
              {`${humidity.toFixed()}%`}
            </span>
          </div>
          <div
            style={{
              marginRight: "3rem",
              fontSize: "20px",
              fontWeight: "normal",
              color: "#ffff",
            }}
          >
            <UilWind size={18} />
            Wind:
            <span
              style={{ fontSize: "20px", fontWeight: "normal", color: "#ffff" }}
            >
              {" "}
              {`${speed.toFixed()} km/h`}
            </span>
          </div>
        </Details>
      </div>

      <ContainerRise>
        <UilSun
          style={{ fontSize: "15px", marginLeft: "3rem", color: "#ffff" }}
        />
        <p style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}>
          Rise:{" "}
          <span
            style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}
          >
            {formatToLocalTime(sunrise, timezone, "hh:mm a")} |
          </span>
        </p>

        <UilSunset
          style={{ fontSize: "15px", marginLeft: "3rem", color: "#ffff" }}
        />
        <p style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}>
          Set:{" "}
          <span
            style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}
          >
            {formatToLocalTime(sunset, timezone, "hh:mm a")} |
          </span>
        </p>

        <UilSun
          style={{ fontSize: "15px", marginLeft: "3rem", color: "#ffff" }}
        />
        <p style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}>
          High:{" "}
          <span
            style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}
          >
            {`${temp_max.toFixed()}°`} |
          </span>
        </p>

        <UilSun
          style={{ fontSize: "15px", marginLeft: "3rem", color: "#ffff" }}
        />
        <p style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}>
          Low:{" "}
          <span
            style={{ fontSize: "15px", fontWeight: "normal", color: "#ffff" }}
          >{`${temp_min.toFixed()}°`}</span>
        </p>
      </ContainerRise>
    </div>
  );
}

export default TemperatureAndDetails;
