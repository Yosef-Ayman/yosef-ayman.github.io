import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppLayout from './components/AppLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import './styles/global.css';

const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));
const Experience = lazy(() => import('./pages/Experience.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:projectId" element={<ProjectDetail />} />
                <Route path="experience" element={<Experience />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
