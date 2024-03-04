import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import MediaCard from "./components/Card";
import Section from "./components/Section";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
function App() {
  const [city, setCity] = useState({});
  const [title, setTitle] = useState("");
  const fetchData = async (title: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${title}&appid={API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setCity(result);
      });
  };

  useEffect(() => {
    fetchData("London");
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <ResponsiveAppBar />
      <Section />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter a city"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchData(title ? title : "London");
          }}
        >
          Submit
        </button>
      </div>
      <MediaCard city={city} />
      {/* <button onClick={fetchData}></button> */}
    </>
  );
}

export default App;
