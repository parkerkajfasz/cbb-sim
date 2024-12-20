import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import UserCreation from "./components/UserCreation.jsx";
import { Provider } from "react-redux";
import store from "./stores/store.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/userCreation" element={<UserCreation />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
