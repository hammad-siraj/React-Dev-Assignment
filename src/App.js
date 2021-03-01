import React, { useState } from "react";
import Evaluator from "./components/evaluator";
import FirstOperand from "./components/firstOperand";

function App() {
  const [firstOperand, setFirstOperand] = useState(0);
  const [showEvaluator, setShowEvaluator] = useState(false);
  return (
    <div className="App">
      {showEvaluator && <Evaluator firstOperand={firstOperand} />}

      <FirstOperand getFirstOperand={setFirstOperand} showEvaluator={(val)=>setShowEvaluator(val)}/>
    </div>
  );
}

export default App;
