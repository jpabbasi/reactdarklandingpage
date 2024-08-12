import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NotFound from './sections/notFound/notFound';
import Services from './sections/services/services';

function App() {
  const Layout = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
