import React from "react";
import { usePoemCreationContext } from "../../contexts/PoemCreationContext";

interface PoemStepThreeProps {
  onFinish: () => void;
  onBack: () => void;
}

const PoemStepThree: React.FC<PoemStepThreeProps> = ({ onFinish, onBack }) => {
  const { poemData, resetPoemData } = usePoemCreationContext();

  const handleFinish = () => {
    console.log("Poem Submitted:", poemData);
    resetPoemData();
    onFinish();
  };

  return (
    <div>
      <h2>Step 3: Review & Submit</h2>
      <p><strong>Title:</strong> {poemData.title}</p>
      <p><strong>Content:</strong> {poemData.content}</p>
      <p><strong>Author:</strong> {poemData.author}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={handleFinish}>Submit</button>
    </div>
  );
};

export default PoemStepThree;
