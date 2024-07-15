'use client';
import React, { useEffect, useRef } from 'react';

interface NewsTickerProps {
  announcements: string[];
}

const NewsTicker: React.FC<NewsTickerProps> = ({ announcements}: NewsTickerProps) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    let animationId: number;

    const scroll = () => {
      if (ticker) {
        ticker.scrollLeft += 1;
        if (ticker.scrollLeft >= ticker.scrollWidth - ticker.clientWidth) {
          ticker.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [announcements]);

  return ( 
    <div className="fixed top-0 left-0 w-full overflow-hidden h-12 bg-gray-200 text-black dark:text-white dark:bg-gray-900 shadow-md  mt-20">
      <div
        ref={tickerRef}
        className="absolute w-full flex space-x-4"
        style={{ animation: 'scroll 20s linear infinite' }}
      >
        {announcements.map((announcement, index) => (
          <div key={index} className="py-1 px-4 whitespace-nowrap">
            {announcement}
          </div>
        ))}
        {/* Duplicate the announcements for seamless scrolling */}
        {announcements.map((announcement, index) => (
          <div key={`duplicate-${index}`} className="py-1 px-4 whitespace-nowrap">
            {announcement}
          </div>
        ))}
        {announcements.map((announcement, index) => (
          <div key={`duplicate-${index}`} className="py-1 px-4 whitespace-nowrap">
            {announcement}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;

