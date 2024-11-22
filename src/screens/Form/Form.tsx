import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PoemStepOne from "../../components/PoemStepOne/PoemStepOne";
import PoemStepTwo from "../../components/PoemStepTwo/PoemStepTwo";
import PoemStepThree from "../../components/PoemStepThree/PoemStepThree";

const Form: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = (nextPath: string) => {
    navigate(nextPath);
  };

  const handleFinish = () => {
    navigate("/dashboard"); 
  };

  return (
    <Routes>
      <Route path="step-1" element={<PoemStepOne onNext={() => handleNext("step-2")} />} />
      <Route path="step-2" element={<PoemStepTwo onNext={() => handleNext("step-3")} onBack={() => handleNext("step-1")} />} />
      <Route path="step-3" element={<PoemStepThree onFinish={handleFinish} onBack={() => handleNext("step-2")} />} />
    </Routes>
  );
};

export default Form;
