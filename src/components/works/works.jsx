import './works.css';
import Card from '../../components/card/Card';
import { cardsData } from '../../sections/workDetails/data';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div className='selectedWork'>
      <div className='imageCardContainer'>
        {cardsData.map((item) => (
          <Link to={`/work/${item.id}`} key={item.id}>
            <div className="imageCard" style={{ backgroundImage: `url(${item.image})`, zIndex: item.id }}>
              <Card className="cardLeft" variant="ghost">
                <div className='cardFlex'>
                  <h1>{item.title}</h1>
                  <div className='cardFlex mobileVisibility'>
                    <p>{item.preview}</p>
                  </div>
                </div>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
