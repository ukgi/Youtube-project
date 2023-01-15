import "./App.css";
import Videos from "./components/Videos/Videos";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
import Searched from "./pages/Searched";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "/videos/:search",
        element: <Searched />,
      },
      {
        path: "/:videoId",
        element: <DetailPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
