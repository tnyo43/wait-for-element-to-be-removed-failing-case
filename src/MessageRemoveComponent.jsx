import React, { useState } from "react";

export function MessageRemoveComponent() {
  const [shown, updateShown] = useState(true);

  const handleOnClick = () => {
    const timeout = Math.random() > 0.5 ? 1000 : 0;

    setTimeout(() => {
      updateShown(false);
    }, timeout);
  };

  return (
    <div>
      <button onClick={() => handleOnClick()}>remove message</button>
      {shown && <p>target message</p>}
    </div>
  );
}
