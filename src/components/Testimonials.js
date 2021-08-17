import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>People I've Worked With</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
