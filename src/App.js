import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './sections/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer';

function App() {
  
  return (
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;