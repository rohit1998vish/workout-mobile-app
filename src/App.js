import React from "react";
import Index from "./components/Index";
import Track from "./components/Track";
import Get from "./components/get";
import Createaccount from "./components/createaccount";
import Sign from "./components/Sign";
import GoalsPage from "./components/goalsPage";
import Workout from "./components/workout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/get" element={<Get />} />
          <Route exact path="/createaccount" element={<Createaccount />} />
          <Route exact path="/sign" element={<Sign />} />
          <Route exact path="/goalspage" element={<GoalsPage />} />
          <Route exact path="/workout" element={<Workout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
