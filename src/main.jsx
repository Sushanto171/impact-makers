import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { routes } from "./Routes/routes";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster position="top-right" />
        <Provider>
          <RouterProvider router={routes} />
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
