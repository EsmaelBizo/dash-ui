import { Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard-layout";
import LoginPage from "../features/auth/pages/login-page";

import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appRoutes } from "./app-routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<DashboardLayout />}>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
