import Image from "next/image";
import React from "react";
import "./Floatingdiv.css";

export default function Floatingdiv({ image, txt1, txt2 }) {
  return (
    <div className="floatingdiv">
      <Image src={image} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
}
