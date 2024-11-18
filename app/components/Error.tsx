"use client";

interface ErrorProps {
  error: string;
}
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const Error = ({ error }: ErrorProps) => {
  const router = useRouter();
  const { locals } = useLanguage();
  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <h2>{locals.error.title}</h2>
        <p>{error}</p>
        <button onClick={handleRefresh}>{locals.error.button}</button>
      </div>
      <style jsx>{`
        .error-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }

        .error-content {
          text-align: center;
          padding: 2rem;
          border-radius: 8px;
          background-color: #ffebee;
          border: 1px solid #ef5350;
        }

        .error-content h2 {
          color: #c62828;
          margin-bottom: 1rem;
        }

        .error-content p {
          color: #b71c1c;
        }
      `}</style>
      <style jsx>{`
        button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #c62828;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover {
          background-color: #b71c1c;
        }

        button:active {
          transform: translateY(1px);
        }
      `}</style>
    </div>
  );
};

export { Error };
