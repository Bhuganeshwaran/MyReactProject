import React, { useState } from "react";

function HooksBtn() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const clkLike = () => {
    setlike(like + 1);
  };
  function clkDislike() {
    setdislike(dislike + 1);
  }
  return (
    <div>
      <div>
        <h1>{like}</h1>
      <button onClick={clkLike}>Like👍</button>
        <h1>{dislike}</h1>
      <button onClick={clkDislike}>Dislike👎</button>
      </div>
    </div>
  );
}
export default HooksBtn;
