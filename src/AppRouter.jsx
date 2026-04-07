import { Routes, Route, Outlet } from "react-router";

import App from "./pages/App.jsx";
import Pokemon from "./pages/Pokemon.jsx";
import Auth from "./pages/Auth.jsx";
import Form from "./pages/Form.jsx";
import Gallery from "./pages/Gallery.jsx";
import Nav from "./components/Nav.jsx";
import PokemonDetail from "./pages/PokemonDetail.jsx";

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
      <Route path="/">
        <Route element={<LayoutWithNav />}>
          <Route index element={<App />} />
          <Route path="pokemon">
            <Route index element={<Pokemon />} />
            <Route path=":pokemonId/:slug" element={<PokemonDetail />} />
          </Route>
        </Route>
        <Route path="auth" element={<Auth />} />
        <Route path="form" element={<Form />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
