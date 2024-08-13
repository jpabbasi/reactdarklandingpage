import './workDetails.css'
import { useParams } from 'react-router-dom';
import { cardsData } from './data';

const WorkDetails = () => {
  const { id } = useParams();
  const work = cardsData.find(work => work.id === parseInt(id));

  if (!work) {
    return <p>Work not found</p>;
  }

  return (
    <div>
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
      </div>
      </div>
  </div>  
  );
};

export default WorkDetails;
