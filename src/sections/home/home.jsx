import './home.css'
import LogoBar from './../../components/logoBar/logoBar';
import Title from './title/title';
import Services from './services/services';
import SelectedWork from './selectedWork/selectedWork';
import Reviews from './reviews/reviews';
import About from './about/about';

const Home = () => {
  return (
    <div>
        {<Title/>}
      <div className='whiteBoard'>
        {<LogoBar/>}
        {<Services/>}
        {<SelectedWork/>}
        {<Reviews/>}
        {<About/>}
      </div>
    </div>
  )
}

export default Home
