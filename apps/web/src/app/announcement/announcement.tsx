import React, { useState } from 'react';

interface AnnouncementProps {
  message?: string;
  backgroundColor?: string;
  textColor?: string;
  dismissible?: boolean;
}

const Announcement: React.FC<AnnouncementProps> = ({
  // message = "📢 Interested in Becoming a Distributor? Reach out to us at switchoffdrinks@gmail.com to explore collaboration opportunities! We are excited to announce that applications are now open to become a distributor of SWITCHOFF products in various countries. If you're passionate about superior quality beverages and eager for a new challenge, this could be the perfect opportunity for you!",
  backgroundColor = 'bg-yellow-300',
  textColor = 'text-black',
  dismissible = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 w-full ${backgroundColor} ${textColor} py-2 px-4 md:py-6 md:px-8 text-center z-50 mt-20`}>
      <div className="flex justify-between items-center">
        <p className="text-xs md:text-lg font-semibold flex-grow">
          📢 <strong>Interested in Becoming a Distributor?</strong><br />
          We are excited to announce that applications are now open to become a distributor of <strong>SWITCHOFF</strong> products in various countries.
          If you're passionate about superior quality beverages and eager for a new challenge, this could be the perfect opportunity for you!<br />
          Reach out to us at {' '}
          <a
            href="mailto:switchoffdrinks@gmail.com?subject=Distributor%20Application"
            className="underline text-white hover:text-blue-700"
          >
            switchoffdrinks@gmail.com
          </a> {' '}
          to explore collaboration opportunities!<br />
        </p>
        {dismissible && (
          <button
            onClick={handleClose}
            className="text-2xl md:text-3xl font-bold hover:text-red-500 ml-4"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Announcement;
