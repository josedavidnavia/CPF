import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";
import Intro from "./screens/Intro/Intro";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/poem/:id" element={<Detail />} />
        <Route path="/form/*" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
