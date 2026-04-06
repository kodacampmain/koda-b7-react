import { Routes, Route, Outlet, Navigate } from "react-router";

import App from "./pages/App.jsx";
import RickMorty from "./pages/RickMorty.jsx";
import Auth from "./pages/Auth.jsx";
import Form from "./pages/Form.jsx";
import Gallery from "./pages/Gallery.jsx";
import Nav from "./components/Nav.jsx";

function LayoutWithNav() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/v1">
        <Route element={<LayoutWithNav />}>
          <Route index element={<App />} />
          <Route path="rm" element={<RickMorty />} />
        </Route>
        <Route path="auth" element={<Auth />} />
        <Route path="form" element={<Form />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
