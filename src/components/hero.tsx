import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mx-auto max-w-2xl">
      <div className="">
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </p>
        <div className="mt-10 gap-x-6">
          <button
            onClick={() => loginWithRedirect()}
            type="button"
            className="rounded-md bg-indigo-600 px-4 py-2 text-base font-medium leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
