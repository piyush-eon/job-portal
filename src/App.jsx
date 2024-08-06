import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/landing";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/theme-provider";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      // {
      //   path: "/onboarding",
      //   element: <Onboarding />,
      // },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <RequireAuth>
      //       <Dashboard />
      //     </RequireAuth>
      //   ),
      // },
      // {
      //   path: "/job/:id",
      //   element: (
      //     <RequireAuth>
      //       <JobPage />
      //     </RequireAuth>
      //   ),
      // },
      // {
      //   path: "/wishlisted",
      //   element: (
      //     <RequireAuth>
      //       <SavedJobs />
      //     </RequireAuth>
      //   ),
      // },
      //   path: "/applications",
      //   element: (
      //     <RequireAuth>
      //       <Applications />
      //     </RequireAuth>
      //   ),
      // },
      // {
      //   path: "/post-job",
      //   element: <PostJob />,
      // },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
