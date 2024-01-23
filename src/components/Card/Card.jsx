import React from "react";
import Image from "next/image";
import "./Card.css";

export default function Card({ emoji, heading, detail }) {
  return (
    <div className="card">
      <Image src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
}
