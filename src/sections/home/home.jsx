import './home.css'
import LogoBar from './../../components/logoBar/logoBar';
import Title from './title/title';
import ServicesCards from './servicesCards/servicesCards';

const Home = () => {
  return (
    <div>
        {<Title/>}
      <div className='whiteBoard'>
        {<LogoBar/>}
        {<ServicesCards/>}
      </div>
    </div>
  )
}

export default Home
