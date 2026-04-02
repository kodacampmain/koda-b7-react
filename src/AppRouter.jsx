import { Routes, Route } from "react-router";

import App from "./pages/App.jsx";
import RickMorty from "./pages/RickMorty.jsx";
import Auth from "./pages/Auth.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/rm" element={<RickMorty />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default AppRouter;
