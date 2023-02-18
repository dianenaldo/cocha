import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import User from "./pages/user";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withAuthenticationRequired } from '@auth0/auth0-react';

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
