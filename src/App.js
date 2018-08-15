import React, { Component } from "react";
import "./App.css";
import MovieBrowser from "./components/MovieBrowser";
import MovieModal from "./components/MovieModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieBrowser />
        <MovieModal />
      </div>
    );
  }
}

export default App;
