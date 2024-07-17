import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Paths from "./constants/paths";
import Layout from "./layout/Layout";
import ProfilePage from "./pages/profile/page";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path={Paths.PROFILE} element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to={Paths.PROFILE} replace />} />
      </>,
    ),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
