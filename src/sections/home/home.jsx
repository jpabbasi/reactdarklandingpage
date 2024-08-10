import './home.css'
import LogoBar from './../../components/logoBar/logoBar';
import Title from './title/title';
import Services from './services/services';
import Works from './works/works'
import Reviews from './reviews/reviews';
import About from './about/about';

const Home = () => {
  return (
    <div>
        {<Title/>}
      <div className='whiteBoard'>
        {<LogoBar/>}
        {<Services/>}
        {<Works/>}
        {<Reviews/>}
        {<About/>}
      </div>
    </div>
  )
}

export default Home
