import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/app');
    }, 1000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loader">
      <h2>Loading...</h2>
      <div className="loading-bar"></div>
    </div>
  );
}

export default LoadingPage;
