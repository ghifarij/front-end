import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { CounterProvider } from "./context/counterContex.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </Provider>
  </StrictMode>
);
