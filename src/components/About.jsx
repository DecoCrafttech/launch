import React from "react";
import { FaTruck, FaRegClock, FaDollarSign } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <div className="container bg-danger col-lg-12 col-md-12">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-6">
            <div className="about-text">
              <h2>Facing These Common Trucking Issues?</h2>
              <ul>
                <li><FaTruck /> Struggling to find reliable loads daily?</li>
                <li><FaRegClock /> Need trucks on time but can't find any?</li>
              </ul>
            </div>
          </div>
          {/* Statistics Box Section */}
        
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div className="about-box">
              <div className="box-in">
                <div className="main-box">
                <li><FaTruck /> Struggling to find reliable loads daily?</li>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="about-box">
              <div className="box-in">
                <div className="main-box">
                <li><FaRegClock /> Need trucks on time but can't find any?</li>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="about-box">
              <div className="box-in">
                <div className="main-box">
                <li><FaDollarSign /> Tired of dealing with increasing operational costs?</li>

                </div>
              </div>
            </div>
          </div>
        </div>


          {/* Image Section */}
          <div className="col-lg-6 col-md-6">
            <div className="about-img">
              <img src="images/trucking-issues.png" alt="Trucking Issues" className="img-fluid" />
              {/* Alternatively, you could use an animation or SVG here */}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
