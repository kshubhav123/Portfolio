import { lazy, Suspense } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { ScrollProvider } from './context/ScrollProvider';
import ScrollToTopButton from './components/ScrollToTopButton';
import "bootstrap-icons/font/bootstrap-icons.css";


// Lazy Loading
const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <ThemeProvider>
        <ScrollProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ScrollToTopButton />
        </ScrollProvider>

      </ThemeProvider>
    </Suspense>
  )
}

export default App
