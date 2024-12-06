import React, { useState, useEffect } from "react";

const Countdown = () => {
  // Target launch date
  const targetDate = new Date("2024-12-20T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval); // Countdown finished
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // No need to include `targetDate` here since it is constant

  return (
    <div className="countdown-container text-center p-4">
      <h1 className="countdown-headline fw-bold mb-4 text-dark">
        Launching Soon in Tamil Nadu and Across India
      </h1>
      <div className="countdown-timer d-flex justify-content-center gap-3 flex-wrap">
        <div className="countdown-unit">
          <span className="countdown-time">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-time">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-time">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-time">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <button type="button"
              data-bs-toggle="modal"
              data-bs-target="#Ctamodal"
              className="btn btn-dark countdown-button mt-4 px-4 py-2">
        Sign Up for Early Access
      </button>
    </div>
  );
};

export default Countdown;
