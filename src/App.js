import React, { useState } from "react";
import Evaluator from "./screens/Evaluator";
import FirstOperand from "./screens/FirstOperand";

function App() {
  const [firstOperand, setFirstOperand] = useState(0);
  const [showEvaluator, setShowEvaluator] = useState(false);
  return (
    <div className="App">
      {showEvaluator && <Evaluator firstOperand={firstOperand} />}

      <FirstOperand
        getFirstOperand={setFirstOperand}
        showEvaluator={(val) => setShowEvaluator(val)}
      />
    </div>
  );
}

export default App;
