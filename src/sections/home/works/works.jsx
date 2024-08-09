import './works.css';
import Card from '../../../components/card/Card';
import HoverButton from '../../../components/hoverButton/hoverButton';
import { cardsData } from './data';

const Works = () => {
  return (
    <div className='selectedWork'>
      <div className='flexTitle'>
        <h1>Selected Work</h1>
        <HoverButton
          title='SEE ALL'
          variant='arrow'
        />
      </div>
      <div className='imageCardContainer'>
        {cardsData.map((item, index) => (
          <div className="imageCard" style={{ backgroundImage: `url(${item.image})`, zIndex: index }} key={index}>
            <Card className="cardLeft" variant="ghost">
              <div className='cardFlex'>
                <h1>{item.title}</h1>
                <div className='cardFlex mobileVisibility'>
                <p>{item.desc}</p>
                <div className='cardButton'>
                  <HoverButton variant="arrow-white" title={'DISCOVER'} link={item.buttonLink}/>
                </div>
                </div>
              </div>
            </Card>
            {item.stacks && (
              <div className="stackContainer">
                {item.stacks.map((stack, index) => (
                  <Card key={index} className="cardRight" variant="ghost">
                    <p>{stack}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
