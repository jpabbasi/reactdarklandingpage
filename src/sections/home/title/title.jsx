import React from 'react'
import homeImage from '../../../assets/homeImage.avif'
import './title.css'

const Title = () => {
  return (
    <header className='mainTitle'>
          <div className="mainTitleText">
            <h1 data-aos="fade-down">Frontend Engineer <br/>& Web Designer</h1>
            <p data-aos="fade-up">
            Premium web development, design, and SEO services to help
            your business stand out.
            </p>
          </div>
        <div className="imageContainer">
          <img src={homeImage} alt={homeImage} className="homeImage" />
        </div>
      </header>
  )
}

export default Title
