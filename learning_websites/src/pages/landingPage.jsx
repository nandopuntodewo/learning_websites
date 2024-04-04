import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Learning from "../components/learning";
import bg from "../assets/bg/background.png";

export default function LandingPage() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <Navbar />
      <Hero />
      <Learning />
    </div>
  );
}
