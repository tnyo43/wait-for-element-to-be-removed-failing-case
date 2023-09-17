import React, { useState } from "react";

export function MessageRemoveComponent(props) {
  const [shown, updateShown] = useState(true);

  const handleOnClick = () => {
    const timeout = props.duration ?? 0;

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
