import './home.css'
import LogoBar from './../../components/logoBar/logoBar';
import Title from './title/title';
import ServicesCards from './servicesCards/servicesCards';
import PastColaborations from './pastColaborations/pastColaborations'

const Home = () => {
  return (
    <div>
        {<Title/>}
      <div className='whiteBoard'>
        {<LogoBar/>}
        {<ServicesCards/>}
        {<PastColaborations/>}
      </div>
    </div>
  )
}

export default Home
