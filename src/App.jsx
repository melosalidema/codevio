import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/StackCard/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Services from './pages/Services';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import { PAGE_THEME } from './data/site';

const ROUTE_TRANSITION_LABELS = {
  '/': 'Codevio',
  '/mission': 'Our Mission',
  '/services': 'Our Services',
  '/work': 'Our Work',
  '/about': 'About Codevio',
  '/contact': 'Contact',
};

function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <PageTransition
      key={pathname}
      label={ROUTE_TRANSITION_LABELS[pathname] ?? 'Codevio'}
      background={PAGE_THEME.transitionBackground}
      textColor={PAGE_THEME.textColor}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
