"use client";

import { useEffect } from "react";

const HelloComp = () => {
  useEffect(() => {
    console.log("hello comp mounted");
  }, []);

  return <div>HelloComp</div>;
};

export default HelloComp;
