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
import PostsPage from "./pages/posts/page";
import ProfilePage from "./pages/profile/page";
import MobileSkills from "./pages/skills/page";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path={Paths.PROFILE} element={<ProfilePage />} />
          <Route path={Paths.POSTS_POSTID} element={<PostsPage />} />
        </Route>
        <Route path={Paths.SKILLS} element={<MobileSkills />} />
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
