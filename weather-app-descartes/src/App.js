import Inputs from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/temperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/index.js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  ContainerApp,
  ContainerInput,
} from "./components/Styles/App/app.styled";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <ContainerApp
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container style={{ marginTop: "5rem" }}>
        <ContainerInput>
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        </ContainerInput>

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />

            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}

        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </Container>
    </ContainerApp>
  );
}

export default App;
