import { useEffect, useState } from "react";
import { IUser } from "../types";
import { getGeoLocation } from "../request";

const Search = ({ user }: { user: IUser }) => {
  const [geoLocation, setGeoLocation] = useState();
  const [city, setCity] = useState('manila');

  useEffect(() => {
    if(city){
        (async () => {
            const geoLocations = await getGeoLocation(city);
            console.log(geoLocations);
        })();
    }
  }, [city]);

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="">
        <p className="mt-6 text-lg leading-8 text-gray-600">{user.name}</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">{user.html_url}</p>
        <div className="mt-10 gap-x-6">
          <button
            // onClick={() => loginWithRedirect()}
            type="button"
            className="rounded-md bg-indigo-600 px-4 py-2 text-base font-medium leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
