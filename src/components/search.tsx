import { useEffect, useState } from "react";
import { ICity, IUser } from "../types";
import { getCities } from "../request";
import { Link, redirect } from "react-router-dom";

const Search = ({ user }: { user: IUser }) => {
  const [selectedCity, setSelectedCity] = useState<ICity>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      (async () => {
        const cities: ICity[] = await getCities(query);
        const filteredCity = cities?.find(
          (city) => city.name.toLowerCase() === query.toLowerCase()
        );
        setSelectedCity(filteredCity);
      })();
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const handleWeather = () => {
    if(!selectedCity) return;

    redirect(`/weather/${selectedCity?.lat}/${selectedCity?.lon}`);
  }

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
      <div className="">
        <p className="mt-6 text-lg leading-8 text-gray-600">{user.name}</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">{user.html_url}</p>
        <form className="mt-20 flex flex-col">
          <input
            type="text"
            className="h-10 mb-5 flex-grow rounded-md border text-base leading-7 placeholder-gray-500 shadow-sm"
            placeholder="&nbsp;City"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleWeather}
            type="button"
            className={`rounded-md px-4 py-2 text-base font-medium leading-7 text-white shadow-sm ${
              selectedCity ? " bg-indigo-600" : "bg-gray-400"
            }`}
          >
            Display Weather
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
