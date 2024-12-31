import React, { useEffect, useRef } from 'react';
import KhanAcademySidebar from '../components/sidebar';

function GamePage() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        // Adjust the height to account for any potential header or padding
        const height = window.innerHeight - 20; // Subtracting 20px for safety
        iframeRef.current.style.height = `${height}px`;
      }
    };

    handleResize(); // Set the initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1 p-4"> {/* Added padding for spacing */}
        <div style={{ height: 'calc(100vh - 2rem)', width: '100%', overflow: 'hidden' }}>
          <iframe
            ref={iframeRef}
            src="/game/index.html"
            title="Crossy Road Game"
            style={{ width: '100%', border: 'none' }} // Added border: 'none' to remove iframe border
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GamePage;