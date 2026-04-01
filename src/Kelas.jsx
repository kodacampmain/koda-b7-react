import React from "react";

import Header from "./components/Header.jsx";

class Kelas extends React.Component {
  state = {
    counter: 0,
  };
  incCounter() {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }
  decCounter() {
    this.setState((state) => {
      return {
        counter: state.counter - 1,
      };
    });
  }
  render() {
    return (
      <section>
        <Header name={"Batch 7"} />
        <p>Komponen Kelas</p>
        <button
          className="border-2 border-black border-solid p-2 bg-gray-100 cursor-pointer"
          onClick={() => this.incCounter()}
        >
          Counter: {this.state.counter}
        </button>
        <button
          className="border-2 border-black border-solid p-2 bg-gray-100 cursor-pointer mx-2"
          onClick={() => this.decCounter()}
        >
          Decrease Counter
        </button>
      </section>
    );
  }
}

export default Kelas;
