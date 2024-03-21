import React from "react";
import Typewriter from "typewriter-effect";

function Taglines() {
  return (
    <Typewriter
      options={{
        strings: [
            "Stay curious, keep learning!",
            "Embrace challenges and grow!",
            "Dream big, work hard!",
            "Make a difference with your code!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Taglines;
