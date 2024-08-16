import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NotFound from './sections/notFound/notFound';
import Services from './sections/services/services';
import Work from './sections/work/work';
import About from './sections/about/about'
import WorkDetails from './sections/workDetails/workDetails';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from './sections/contact/contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const Layout = ({ children, scrollThresholds }) => (
    <>
      <Header scrollThresholds={scrollThresholds} />
      <main>{children}</main>
      <Footer />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout scrollThresholds={{ default: 0.6 * window.innerHeight, medium: 0.8 * window.innerHeight, small: 1 * window.innerHeight }}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout scrollThresholds={{ default: 0.4 * window.innerHeight, medium: 0.6 * window.innerHeight, small: 0.5 * window.innerHeight }}>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/work"
          element={
            <Layout scrollThresholds={{ default: 99 * window.innerHeight, medium: 99 * window.innerHeight, small: 99 * window.innerHeight }}>
              <Work />
            </Layout>
          }
        />
        <Route
          path="/work/:id"
          element={
            <Layout scrollThresholds={{ default: 0.4 * window.innerHeight, medium: 0.6 * window.innerHeight, small: 0.5 * window.innerHeight }}>
              <WorkDetails />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout scrollThresholds={{ default: 0.4 * window.innerHeight, medium: 0.6 * window.innerHeight, small: 0.5 * window.innerHeight }}>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout scrollThresholds={{ default: 99 * window.innerHeight, medium: 99 * window.innerHeight, small: 99 * window.innerHeight }}>
              <Contact />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
