import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="mx-auto px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Weather Forecast</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-700"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div className="ml-4">
            <p className="text-3xl font-medium text-gray-900">
              Weather Forecast
            </p>
          </div>
        </div>
        <div
          className={`items-center justify-end md:flex md:flex-1 lg:w-0 ${
            isAuthenticated ? "visible" : "invisible"
          }`}
        >
          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: import.meta.env.VITE_APP_URL,
                },
              })
            }
            type="button"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
