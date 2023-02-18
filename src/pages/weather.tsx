import { Link } from "react-router-dom";
import { selectedCityAtom } from "../App";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getWeather } from "../request";
import Table from "../components/table";

const Weather = () => {
  const [selectedCity] = useAtom(selectedCityAtom);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    (async () => {
      const response = await getWeather(selectedCity);
      setForecast(response.forecast.forecastday);
    })();
  }, []);

  return (
    forecast && (
      <div className="mx-auto">
        <div className="">
          <Table forecast={forecast} />
          <div className="mt-8">
            <Link
              to={`/user`}
              type="button"
              className="rounded-md px-4 py-2 text-base font-medium leading-7 text-white shadow-sm bg-indigo-600"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Weather;
