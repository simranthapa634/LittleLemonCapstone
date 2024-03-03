import React from "react";
import "../components/styles/Specials.css";
import SpecialsCard from "./SpecialsCard";

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>Menu</h1>
      </div>
      <SpecialsCard />
    </div>
  );
};

export default Specials;
