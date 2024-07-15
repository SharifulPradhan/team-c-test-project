'use client'
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetTime = '2024-08-31T23:59:59';
  const calculateTimeLeft = () => {
    const difference = +new Date(targetTime) - +new Date();
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

  return (
    <div className='border-4 border-black p-5 bg-blue-500 text-white fixed bottom-0 right-0 timer-anim'>
      <h4 className='text-center mb-2 font-bold text-xl'>Final Exam 2023-2024</h4>
      <div className="flex justify-center items-center space-x-4">
        {Object.keys(timeLeft).length === 0 ? (
          <span className="text-2xl font-bold">Time&apos;s up!</span>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </>
        )}
      </div>
      <h4 className='text-center mt-2 font-bold text-xl'>Insha Allah</h4>
    </div>
  );
};

export default CountdownTimer;
