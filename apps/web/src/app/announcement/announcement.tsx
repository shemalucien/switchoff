// import React, { useState } from 'react';

// interface AnnouncementProps {
//   message?: string;
//   backgroundColor?: string;
//   textColor?: string;
//   dismissible?: boolean;
// }

// const Announcement: React.FC<AnnouncementProps> = ({
//   // message = "📢 Interested in Becoming a Distributor? Reach out to us at switchoffdrinks@gmail.com to explore collaboration opportunities! We are excited to announce that applications are now open to become a distributor of SWITCHOFF products in various countries. If you're passionate about superior quality beverages and eager for a new challenge, this could be the perfect opportunity for you!",
//   backgroundColor = 'bg-yellow-300',
//   textColor = 'text-black',
//   dismissible = true,
// }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className={`fixed top-0 w-full ${backgroundColor} ${textColor} py-2 px-4 md:py-6 md:px-8 text-center z-50 mt-20`}>
//       <div className="flex justify-between items-center">
//         <p className="text-xs md:text-lg font-semibold flex-grow">
//           📢 <strong>Interested in Becoming a Distributor?</strong><br />
//           We are excited to announce that applications are now open to become a distributor of <strong>SWITCHOFF</strong> products in various countries.
//           If you're passionate about superior quality beverages and eager for a new challenge, this could be the perfect opportunity for you!<br />
//           Reach out to us at {' '}
//           <a
//             href="mailto:switchoffdrinks@gmail.com?subject=Distributor%20Application"
//             className="underline text-white hover:text-blue-700"
//           >
//             switchoffdrinks@gmail.com
//           </a> {' '}
//           to explore collaboration opportunities!<br />
//         </p>
//         {dismissible && (
//           <button
//             onClick={handleClose}
//             className="text-2xl md:text-3xl font-bold hover:text-red-500 ml-4"
//           >
//             &times;
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Announcement;


import React, { useEffect, useRef, useState } from "react";

interface AnnouncementProps {
  /** Unique id for this announcement — used as the dismissal storage key.
   *  Bump it whenever the message changes so it reappears for everyone,
   *  including people who dismissed a previous announcement. */
  id?: string;
  icon?: string;
  title?: string;
  message?: string;
  emailAddress?: string;
  emailSubject?: string;
  backgroundColor?: string;
  textColor?: string;
  dismissible?: boolean;
}

const STORAGE_PREFIX = "switchoff_dismissed_announcement:";

const Announcement: React.FC<AnnouncementProps> = ({
  id = "distributor-2026",
  icon = "📢",
  title = "Interested in Becoming a Distributor?",
  message = "We are excited to announce that applications are now open to become a distributor of SWITCHOFF products in various countries. If you're passionate about superior quality beverages and eager for a new challenge, this could be the perfect opportunity for you! Reach out to us at",
  emailAddress = "switchoffdrinks@gmail.com",
  emailSubject = "Distributor Application",
  backgroundColor = "bg-yellow-300",
  textColor = "text-black",
  dismissible = true,
}) => {
  const storageKey = `${STORAGE_PREFIX}${id}`;
  const bannerRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  // Start hidden; only show once we've checked storage on the client,
  // so a returning visitor who already dismissed this exact announcement
  // never sees a flash of it before it disappears.
  const [status, setStatus] = useState<"checking" | "visible" | "closing" | "hidden">(
    "checking"
  );

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(storageKey);
    setStatus(dismissed ? "hidden" : "visible");
  }, [storageKey]);

  // Keep a spacer under the fixed banner exactly as tall as the banner
  // itself, so page content is never hidden behind it — even as the text
  // wraps to more lines on narrow screens or the window is resized.
  useEffect(() => {
    if (status !== "visible" || !bannerRef.current) return;
    const el = bannerRef.current;
    const update = () => setSpacerHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [status]);

  const handleClose = () => {
    setStatus("closing");
    localStorage.setItem(storageKey, "true");
    // Let the exit transition play before unmounting.
    window.setTimeout(() => setStatus("hidden"), 200);
  };

  if (status === "checking" || status === "hidden") return null;

  return (
    <>
      <div
        aria-live="polite"
        className={`fixed top-0 w-full ${backgroundColor} ${textColor} py-2 px-4 md:py-6 md:px-8 text-center z-50 mt-20 ${
          status === "closing" ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
        }`}
        ref={bannerRef}
        role="status"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center gap-3">
          <p className="flex-grow text-xs sm:text-sm md:text-base leading-relaxed">
            <span aria-hidden="true">{icon}</span>{" "}
            <strong className="font-semibold">{title}</strong>{" "}
            {message}{" "}
            <a
              className="font-semibold underline decoration-2 underline-offset-2 hover:opacity-80"
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`}
            >
              {emailAddress}
            </a>{" "}
            to explore collaboration opportunities!
          </p>

          {dismissible ? <button
              aria-label="Dismiss announcement"
              className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full text-lg leading-none hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current transition-colors"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button> : null}
        </div>
      </div>

      {/* Reserves the space the fixed banner occupies so it never covers
          the header or page content underneath it. */}
      <div aria-hidden="true" style={{ height: spacerHeight }} />
    </>
  );
};

export default Announcement;

// ---------------------------------------------------------------------------
// Usage — defaults already match the current distributor announcement:
//
// <Announcement />
//
// To launch a different announcement later, just change `id` (so it
// reappears even for people who dismissed the old one) and pass new
// title/message/emailAddress — no component code changes needed.
// ---------------------------------------------------------------------------