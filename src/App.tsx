import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";
import Intro from "./screens/Intro/Intro";
import { Poem } from "./types/poems";

const poems: Poem[] = [
  {
    id: "1",
    title: "The Road Not Taken",
    excerpt: "Two roads diverged in a yellow wood",
    author: "Robert Frost",
    lines: [
      "Two roads diverged in a yellow wood,",
      "And sorry I could not travel both",
      "And be one traveler, long I stood",
      "And looked down one as far as I could",
    ],
    linecount: "4",
  },
  {
    id: "2",
    title: "Ozymandias",
    excerpt: "I met a traveler from an antique land",
    author: "Percy Bysshe Shelley",
    lines: [
      "I met a traveler from an antique land",
      "Who said: Two vast and trunkless legs of stone",
      "Stand in the desert. Near them on the sand",
    ],
    linecount: "3",
  },
  { id: "3", title: "Daffodils", excerpt: "I wandered lonely as a cloud", author: "William Wordsworth", lines: [], linecount: "4" },
];

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro onNext={() => {}} />} />
        <Route
          path="/dashboard"
          element={<Dashboard poems={poems} onViewPoem={(id: string) => {}} />}
        />
        <Route
          path="/poem/:id"
          element={<Detail poem={poems[0]} onBack={() => {}} />} 
        />
        <Route path="/form/*" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
