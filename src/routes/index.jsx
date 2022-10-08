import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "../providers/AppContext";

import Login from "../pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<h1>Olá mundo</h1>} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
