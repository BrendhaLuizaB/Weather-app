import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import { Input } from "./Styles/Inputs";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = (e) => {
    if (e?.key === "Enter") setQuery({ q: city });
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          onKeyPress={handleSearchClick}
        />
        <div style={{ marginRight: "1rem" }}>
          <UilSearch size={25} onClick={handleSearchClick} color="#ffff" />
        </div>
        <div>
          {" "}
          <UilLocationPoint
            size={25}
            onClick={handleLocationClick}
            color="#ffff"
          />
        </div>
      </div>
    </div>
  );
}

export default Inputs;
