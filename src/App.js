import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import JobListings from "./components/JobListings/JobListings";
import Attribution from "./components/Attribution/Attribution";

const App = () => {
  return (
    <div className="App">
      <Header />
      <JobListings />
      <Attribution />
    </div>
  );
};

export default App;
