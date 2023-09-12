import React from "react";
import "./Footer.scss";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import image from "../../logo_jpg.jpg";
import image1 from "../../logo_png.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="left">
        <div className="connect-learn">
          <img src={image1} className="logo" />
        </div>
        <div className="follow-us">Follow us and stay Updated</div>
        <div className="social-links">
          <div className="space">
            <AiFillInstagram size={40} />
          </div>
          <div className="space">
            <AiFillLinkedin size={40} />
          </div>
          <div className="space">
            <AiFillFacebook size={40} />
          </div>
          <div className="space">
            <AiFillYoutube size={40} />
          </div>
        </div>
      </div>
      <div className="courses">
        <h3>Courses</h3>
        <div className="math-course link ">Math</div>
        <div className="science-course link space">Science</div>
        <div className="english-course link space">Enlish</div>
        <div className="coding-course link space">Coding</div>
      </div>
      <div className="events">
        <h3>Events</h3>
        <div className="superchrged link">Supercharged Summer '23</div>
      </div>
      <div className="others">
        <h3>Others</h3>
        <div className="about-us link "> About us </div>
        <div className="blogs link space">Blogs</div>
        <div className="terms-conditions link space">Terms & conditions</div>
        <div className="privacy-policy link space"> Privacy policy</div>
      </div>
    </div>
  );
}

export default Footer;
