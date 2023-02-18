import { IUser } from "../types";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { selectedCityAtom } from "../App";
import { useAtom } from "jotai";

const Search = ({ user }: { user: IUser }) => {
  const [selectedCity, setSelectedCity] = useAtom(selectedCityAtom);

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="">
        <p className="mt-6 text-lg leading-8 text-gray-600">{user.name}</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">{user.html_url}</p>
        <div className="mt-20 flex flex-col">
          <input
            type="text"
            className="h-10 mb-5 flex-grow rounded-md border text-base leading-7 placeholder-gray-500 shadow-sm px-2"
            placeholder="City"
            onChange={(e) => setSelectedCity(e.target.value)}
          />
          <Link
            to={`/weather`}
            type="button"
            className="rounded-md px-4 py-2 text-base font-medium leading-7 text-white shadow-sm bg-indigo-600"
          >
            Display Weather
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
