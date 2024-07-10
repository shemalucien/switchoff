'use client';

import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console -- For debugging purposes
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            className='drop-shadow-glow animate-flicker text-red-500'
            size={60}
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>
            Oops, something went wrong!
          </h1>
          <button className='mt-4' onClick={reset} type='button'>
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
