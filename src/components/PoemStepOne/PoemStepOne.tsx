import React from "react";
import { usePoemCreationContext } from "../../contexts/PoemCreationContext";

interface PoemStepOneProps {
  onNext: () => void;
}

const PoemStepOne: React.FC<PoemStepOneProps> = ({ onNext }) => {
  const { poemData, updatePoemData } = usePoemCreationContext();

  return (
    <div>
      <h2>Step 1: Add Title</h2>
      <input
        type="text"
        value={poemData.title}
        onChange={(e) => updatePoemData("title", e.target.value)}
        placeholder="Enter poem title"
      />
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default PoemStepOne;
