import React from 'react'
import homeImage from '../../../assets/portrait2.png'
import './title.css'

const Title = () => {
  return (
    <header className='mainTitle'>
          <div>
            <h1 className="gradientBackground" data-aos="fade-down">Frontend Engineer <br/>& Web Designer</h1>
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
