import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './sections/home/home'
import Header from './components/header/header'

function App() {
  
  return (
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;