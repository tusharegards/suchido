import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "./routes/auth/sign-in.tsx";
import SignUp from "./routes/auth/sign-up.tsx";
import ResetPassword from "./routes/auth/reset-password.tsx";
import VerifyEmail from "./routes/auth/verify-email.tsx";
import AuthLayout from "./routes/auth/auth-layout.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: App },
      { path: "auth",
        Component: AuthLayout,
        children: [
          { path: "sign-in", Component: SignIn },
          { path: "sign-up", Component: SignUp },
          { path: "reset-password", Component: ResetPassword },
          { path: "verify-email", Component: VerifyEmail },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
