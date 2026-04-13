import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "../components/Nav";
import Image5 from "../assets/img/5.jpeg";
import Image6 from "../assets/img/6.jpeg";
import Image7 from "../assets/img/7.jpeg";
import Image8 from "../assets/img/8.jpeg";
import Groot from "../assets/img/groot.jpg";
import { rickMortyActions } from "../redux/slices/rickMorty.js";

function Gallery() {
  const dispatch = useDispatch();
  const { getCharactersThunk } = rickMortyActions;
  useEffect(() => {
    dispatch(getCharactersThunk(2));
  }, [dispatch, getCharactersThunk]);
  return (
    <>
      <Nav />
      <main>
        <section>
          <h2>Public Image</h2>
          <div className="grid grid-cols-4">
            <img src="/img/1.jpeg" alt="1" />
            <img src="/img/2.jpeg" alt="2" />
            <img src="/img/3.jpeg" alt="3" />
            <img src="/img/4.jpeg" alt="4" />
            <img src="/img/groot.jpg" alt="groot" />
          </div>
        </section>
        <section>
          <h2>Assets Image</h2>
          <div className="grid grid-cols-4">
            <img src={Image5} alt="5" />
            <img src={Image6} alt="6" />
            <img src={Image7} alt="7" />
            <img src={Image8} alt="8" />
            <img src={Groot} alt="groot2" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Gallery;
