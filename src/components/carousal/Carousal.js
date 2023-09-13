import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousal() {
  return (
    <Carousel size={50} autoPlay infiniteLoop>
      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Image 1"
        />
        <p className="legend">Diverse and Joyful Learning</p>
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1681488245781-6d5617e3dba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Image 2"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1664910790735-cde4270a0b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Image 3"
        />
        <p className="legend">1:1 Mentoring</p>
      </div>

      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661628647825-30d6afbbcf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          alt="Image 3"
        />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Image 3"
        />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1611623516688-c47bb8d43311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHZpcnR1YWwlMjBjbGFzc3Jvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 3"
        />

        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Carousal;
