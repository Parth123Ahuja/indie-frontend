import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import ErrorPage from "./Layout/Error";
import Rootlayout from "./Layout/RootLayout";
import ReturnPolicy from "./Pages/TermsPages/ReturnPolicy";
import ConnectPage from "./Pages/Connect";
import HomePage from "./Pages/HomePage";
import OurImpactPage from "./Pages/OurImpact";
import OurStoryPage from "./Pages/OurStori";
import Shop from "./Pages/Shop";
import SingleProduct from "./Pages/SingleProduct";
import AdminDashboard from "./Pages/AdminDashboard";
import LoginPage from "./Pages/UserPages/LoginPage";
import SignupPage from "./Pages/UserPages/SignupPage";
import UserDashboard from "./Pages/UserPages/UserDashboard";
import CheckoutPage from "./Pages/UserPages/CheckoutPage";
import ShoppingCartDialog from "./Components/GlobalComponents/ShoppingCartDialog";
import TermsOfService from "./Pages/TermsPages/TermsOfService";
import Refunds from "./Pages/TermsPages/Refunds";
import PrivacyPolicy from "./Pages/TermsPages/PrivacyPolicy";
import ShippingPolicy from "./Pages/TermsPages/ShippingPolicy";
import BlogsPage from "./Pages/Blogs";
import SingleBlogPage from "./Pages/SingleBlogPage";
import OrderPlacedPage from "./Pages/OrderPlacedPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      error: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/ourstori",
          element: <OurStoryPage />,
        },
        {
          path: "/ourimpact",
          element: <OurImpactPage />,
        },
        {
          path: "/connect",
          element: <ConnectPage />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:id",
          element: <SingleProduct />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/userdashboard",
          element: <UserDashboard />,
        },
        {
          path: "/admindashboard",
          element: <AdminDashboard />,
        },
        {
          path: "/orderplaced",
          element: <OrderPlacedPage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/cart",
          element: <ShoppingCartDialog />,
        },
        // {
        //   path:'/returnpolicy',
        //   element:<p>RETURN POLICY</p>
        // },
        {
          path: "/shippingpolicy",
          element: (
            <p>
              <ShippingPolicy />
            </p>
          ),
        },
        {
          path: "/refunds-and-cancellations",
          element: (
            <p>
              <Refunds />
            </p>
          ),
        },
        {
          path: "/privacypolicy",
          element: (
            <p>
              <PrivacyPolicy />
            </p>
          ),
        },
        {
          path: "/termsofservice",
          element: (
            <p>
              <TermsOfService />
            </p>
          ),
        },
        {
          path: "/blogs",
          element: (
            <p>
              <BlogsPage />
            </p>
          ),
        },
        {
          path: "/singleblog",
          element: (
            <p>
              <SingleBlogPage />
            </p>
          ),
        },
        {
          path: "/returnpolicy",
          element: (
            <p>
              <ReturnPolicy />
            </p>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
