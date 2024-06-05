'use client';

import React from 'react';

interface CountDownProps {
  time: number; // 259200s
}

const CountDown: React.FC<CountDownProps> = ({ time }) => {
  const days = Math.floor(time / (24 * 60 * 60)); // Calculate days
  const hoursRemaining = time % (24 * 60 * 60); // Remaining seconds after calculating days
  const hours = Math.floor(hoursRemaining / (60 * 60)); // Calculate hours
  const minutesRemaining = hoursRemaining % (60 * 60); // Remaining seconds after calculating hours
  const minutes = Math.floor(minutesRemaining / 60); // Calculate minutes
  const seconds = minutesRemaining % 60; // Calculate remaining seconds

  return (
    <div className="h-16">
      <div className="absolute left-0 top-0 inline-flex flex-col items-start justify-start gap-1">
        <p className="font-medium text-black">Days</p>
        <p className="text-xl font-bold">{days.toString().padStart(2, '0')}</p>
      </div>
      <div className="absolute left-[84px] top-0 inline-flex flex-col items-start justify-start gap-1">
        <p className="font-medium text-black">Hours</p>
        <p className="text-xl font-bold">{hours.toString().padStart(2, '0')}</p>
      </div>
      <div className="absolute left-[164px] top-0 inline-flex flex-col items-start justify-start gap-1">
        <p className="font-medium text-black">Minutes</p>
        <p className="text-xl font-bold">
          {minutes.toString().padStart(2, '0')}
        </p>
      </div>
      <div className="absolute left-[251px] top-0 inline-flex flex-col items-start justify-start gap-1">
        <p className="font-medium text-black">Seconds</p>
        <p className="text-xl font-bold">
          {seconds.toString().padStart(2, '0')}
        </p>
      </div>
      <div className="absolute left-[63px] top-[26px] inline-flex flex-col items-start justify-start gap-2">
        <div className="h-1 w-1 rounded-full bg-red-400" />
        <div className="h-1 w-1 rounded-full bg-red-400" />
      </div>
      <div className="absolute left-[143px] top-[26px] inline-flex flex-col items-start justify-start gap-2">
        <div className="h-1 w-1 rounded-full bg-red-400" />
        <div className="h-1 w-1 rounded-full bg-red-400" />
      </div>
      <div className="absolute left-[230px] top-[26px] inline-flex flex-col items-start justify-start gap-2">
        <div className="h-1 w-1 rounded-full bg-red-400" />
        <div className="h-1 w-1 rounded-full bg-red-400" />
      </div>
    </div>
  );
};

export default CountDown;
