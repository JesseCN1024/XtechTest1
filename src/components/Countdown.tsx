import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents: JSX.Element[] = [];
  Object.keys(timeLeft).forEach((interval) => {
    timeComponents.push(
      <div className="flex flex-col items-center">
        <span className="text-sm">
          {interval.charAt(0).toUpperCase() + interval.slice(1)}
        </span>
        <span className="text-4xl font-bold">
          {(timeLeft as any)[interval]}
        </span>
      </div>
    );
  });

  return (
    <div className="flex space-x-2">
      {timeComponents.map((component, index) => (
        <React.Fragment key={index}>
          {component}
          {index < timeComponents.length - 1 && (
            <span className="text-red-600" style={{ color: "#DB4444" }}>
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
