import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import { IUser } from "./types";
import User from "./pages/user";
import Weather from "./pages/weather";
import { atom } from "jotai";
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const userAtom = atom<IUser>({} as IUser);
export const selectedCityAtom = atom<string>('');

const ProtectedRoute = ({ component, ...args } : any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/user",
    element: <ProtectedRoute component={User} />,
  },
  {
    path: "/weather",
    element: <ProtectedRoute component={Weather} />,
  },
]);

const App = () => {
  return (
    <div className="isolate bg-white">
      <Header />
      <main>
        <div className="relative px-6 lg:px-8">
          <RouterProvider router={router} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
