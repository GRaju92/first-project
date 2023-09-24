import Feedback from "./Components/Feedback";
import "./App.css";
import AppBar from "./Components/AppBar";
import Banner from "./Components/Banner";
import Menu from "./Components/Menu";
import PickoftheWeek from "./Components/PickoftheWeek";
// import {Container, Image, } from "react-bootstrap";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu/>
      <PickoftheWeek/>
      <Feedback/>
      <div className="text-center my-3 text-primary small">
        Copyright 2023-2024
      </div>
    </>
  );
}

export default App;
