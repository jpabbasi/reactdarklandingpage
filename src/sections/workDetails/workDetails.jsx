import './workDetails.css'
import { useParams } from 'react-router-dom';
import { cardsData } from './data';
import Card from '../../components/card/Card';

const WorkDetails = () => {
  const { id } = useParams();
  const work = cardsData.find(work => work.id === parseInt(id));

  if (!work) {
    return <p>Work not found</p>;
  }

  return (
    <div>
      <div className='servicesHeader flexColumn'>
        <div>
        <h3 className='gradientBackground'>{work.role} @</h3>
        <h1>{work.title}</h1>
        </div>
        <p>{work.desc}</p>
      <img src={work.headerImage} alt={`${work.title}'s header`} />
      </div>
        <div className='whiteBoard'>
          <div className="analytics flexRow">
            {
              work.info.map((item, index) => (
                <div key={index} className="analyticsItem">
                  <h3>{item.title}</h3>
                  <h2>{item.content}</h2>
                </div>
              ))
            }
          </div>
          <div className='servicesFlex flexRow'>
            <div className='flexColumn details'>
            {work.details.map((item) => (
            <div className="servicesTextContainer">
            <div className={`servicesText flexColumn`} style={{ top:'5rem'  }}>
              <div>
                <p>{item.subtitle}</p>
                <h1>{item.title}</h1>
                <h3>{item.text}</h3>
              </div>
            </div>
            </div>
            ))}
            </div>
            <div className='servicesCards flexColumn'>
              {work.cards.map((item, index) => (
                <Card fade={"fade-up"} key={index} className="serviceCard">
                  <div className="cardFlex">
                    <div className="cardText">
                      <div className="cardTitle flexColumn" style={{alignItems: 'start'}}>
                        <h3>{item.subtitle}</h3>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
        </div>
      </div>
        </div>
  </div>  
  );
};

export default WorkDetails;
