import { lazy, Suspense } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
const LoadingPage = lazy(() => import('./pages/LoadingPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
import Loader from './components/Loader';


const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />} >
        <Routes>
          <Route path="/" element={<Navigate to="/loading" />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/app" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
