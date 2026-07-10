import { createBrowserRouter, RouterProvider } from "react-router";
import UsersPage from "../pages/UsersPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
]);
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
