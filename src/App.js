import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieItemDetails from "./components/MovieItemDetails";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/movie/:id" element={<MovieItemDetails />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/toprated" element={<TopRated />} />
        <Route exact path="/upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
}

export default App;
