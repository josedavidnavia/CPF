import React from "react";
import { usePoemCreationContext } from "../../contexts/PoemCreationContext";

interface PoemStepTwoProps {
  onNext: () => void;
  onBack: () => void;
}

const PoemStepTwo: React.FC<PoemStepTwoProps> = ({ onNext, onBack }) => {
  const { poemData, updatePoemData } = usePoemCreationContext();

  return (
    <div>
      <h2>Step 2: Add Content</h2>
      <textarea
        value={poemData.content}
        onChange={(e) => updatePoemData("content", e.target.value)}
        placeholder="Write your poem..."
      ></textarea>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default PoemStepTwo;
