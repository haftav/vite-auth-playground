import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { SessionProvider, useSession } from "next-auth/react";

import App from "./App";
import "./index.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
