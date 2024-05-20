import { useState } from 'react';

const useBooleanState = () => {
  const [booleanState, setBooleanState] = useState(false);

  const toggleState = () => {
    setBooleanState((prev) => !prev);
  };

  const deactivateState = () => {
    setBooleanState(false);
  };

  const activateState = () => {
    setBooleanState(true);
  };

  return [toggleState, deactivateState, activateState, booleanState];
};

export default useBooleanState;
