import './reviews.css';
import { reviewsData } from './data';
import Card from '../../../components/card/Card';

const Reviews = () => {
  return (
    <div className="reviewsContainer">
      <h1>Professional Recommendations</h1>
      <p>Discover how industry leaders and professionals
        have benefited from my expertise and dedication.
        Read their insights and recommendations.</p>

      <div className="reviewsGrid">
        {reviewsData && reviewsData.map((review, index) => (
          <Card key={index} className="reviewCard">
            <div className="reviewContent">
              <h2>{review.title}</h2>
              <p>{review.description}</p>
            </div>
            <div className="reviewerInfo">
              <div className="avatarContainer">
                <img src={review.avatar} alt={`${review.name}'s avatar`} className="reviewerAvatar" />
              </div>
              <div className="reviewerDetails">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
