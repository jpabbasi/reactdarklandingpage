import './works.css';
import Card from '../../components/card/Card';
import HoverButton from '../../components/hoverButton/hoverButton';
import { cardsData } from './data';

const Works = () => {
  return (
    <div className='selectedWork'>
      <div className='imageCardContainer'>
        {cardsData.map((item, index) => (
          <div className="imageCard" style={{ backgroundImage: `url(${item.image})`, zIndex: index }} key={index}>
            <Card className="cardLeft" variant="ghost">
              <div className='flexColumn cardFlex'>
                <h1>{item.title}</h1>
                <div className='cardFlex mobileVisibility'>
                <p>{item.desc}</p>
                <div className='cardButton'>
                  <HoverButton variant="arrow-white" title={'DISCOVER'} link={item.buttonLink}/>
                </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
