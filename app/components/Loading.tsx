"use client";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #291f32;
          border-top: 3px solid #efcfc5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export { Loading };
