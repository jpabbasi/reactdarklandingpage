import znvImg from '../../assets/servicesHeader.png'
import backgroundImage from '../../assets/backgroundImage1.jpg'

export const cardsData = [
    {
      id: 1,
      role: 'FRONTEND ENGINEER',
      title: "ZENVIA",
      desc: `Zenvia is a platform that empowers companies to
              create unique communication experiences to their customers,
              in the most used and custom apps and platforms.
              Believing in technological evoluation combined with human
              experience, Zenvia's will is to unify communication in
              the whole customer's journey.`,
      headerImage: znvImg,
      image: backgroundImage,
      preview: `Engineered critical enhancements for Zenvia's Conversion app, optimizing user
                experience and driving a successful rebrand through strategic cross-team collaboration.`,
      info: [
        { 
          title: `PLATFORMS`,
          content: `WEB & MOBILE`
        },{ 
          title: `DURATION`,
          content: `2 YEARS`
        },{ 
          title: `FOCUS AREA`,
          content: `CONVERSION`
        },{ 
          title: `COMPANY WEBSITE`,
          content: <a href="https://www.zenvia.com">ZENVIA.COM</a>
        },
      ]
    }
  ];
  