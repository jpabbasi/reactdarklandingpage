import znvHeader from '../../assets/znvHeader.webp'
import znvBackground from '../../assets/znvBackground.webp'
import wHeader from '../../assets/wHeader.webp'
import wBackground from '../../assets/wBackground.webp'
import amHeader from '../../assets/amHeader.webp'
import amBackground from '../../assets/amBackground.webp'
import csHeader from '../../assets/csHeader.webp'
import csBackground from '../../assets/csBackground.webp'
import react from '../../assets/reactLogo.webp'
import typescript from '../../assets/typescriptLogo.webp'
import node from '../../assets/nodeLogo.webp'
import mongo from '../../assets/mongoLogo.webp'
import vuejs from '../../assets/vueLogo.webp'
import next from '../../assets/nextLogo.svg'
import express from '../../assets/expressLogo.webp'
import xd from '../../assets/xdLogo.webp'
import figma from '../../assets/figmaLogo.webp'

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
      headerImage: znvHeader,
      image: znvBackground,
      preview: `Engineered critical enhancements for Zenvia's Conversion app, optimizing user
                experience and driving a successful rebrand through strategic cross-team collaboration.`,
      stacks: [
        { name: 'React', description: 'Front-End Development', icon: react },
        { name: 'TypeScript', description: 'Typed Language', icon: typescript },
        { name: 'NodeJS', description: 'Backend Development', icon: node },
        { name: 'MongoDB', description: 'NoSQL Database', icon: mongo },
      ],
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
          content: <a rel="noreferrer" target="_blank" href="https://www.zenvia.com">ZENVIA.COM</a>
        },{ 
        title: `BASED IN`,
          content: `SÃO PAULO, BR`
        },
      ],
      details: [
        {
          subtitle: 'Frontend Engineer & Team Collaborator',
          title: 'WORK AND TEAM',
          text: <>primarily worked on one of Zenvia's most critical
          products: Conversion, an app that offers a multitude of
          possibilities for users to dynamically sell across multiple
          top-trending apps simultaneously. I collaborated closely with
          large teams to implement upgrades to both old and new flows in the app,
          architecting and developing new, useful, and unique tools. Additionally,
          I actively participated in multiple UX and Product Management boardings,
          providing crucial support in making significant decisions during the app's rebranding process.
          </>
        },
        {
          subtitle: 'MILESTONES',
          text: <><p>• Developed meaningful features that resonated throughout the entire user flow.</p>
          <p>• Acted as a bridge between Product and Development teams, ensuring mutual respect for each team's processes.</p>
          <p>• Engineered smart and cost-effective solutions to complex problems.</p>
          <p>• Delivered high-priority tasks with strict deadlines, ensuring top-tier quality.</p>
          </>
        },
      ],
      cards: [
        {
          subtitle: 'CHALLENGE',
          title: 'Rebranding Complexities Threatened User Experience Continuity',
          desc: `Navigating the complexities of rebranding an established
                product while ensuring the continuity of existing workflows
                and implementing significant changes.`
        },
        {
          subtitle: 'GOAL',
          title: 'Seamlessly Modernize and Enhance the Conversion App',
          desc: `To modernize and enhance the Conversion app, maintaining consistency and usability throughout the rebranding process.`
        },
        {
          subtitle: 'RESULT',
          title: 'Successful Rebranding Led to Enhanced User Satisfaction and Recognition as a Frontend Specialist at a Bi-Annual Seminar',
          desc: `The rebranding was highly successful, leading to an improved user experience and increased customer satisfaction.
          Additionally, I was recognized as a Frontend Specialist during a bi-annual seminar for my exceptional expertise in resolving
          critical bugs and enhancing the user experience during this high-stakes rebranding project.`
        }
      ]
    },
    {
      id: 2,
      role: 'FRONT-END ENGINEER',
      title: "WIO",
      desc: `Wio is a people-centered banking platform designed to boost your journey no matter how far you want to go.
      We are building a financially savvy platform that brings tomorrow closer.`,
      headerImage: wHeader,
      image: wBackground,
      preview: `Successfully managed dual roles in software engineering and UX/UI design, contributing to a $542 million growth across two investment rounds.`,
      stacks: [
        { name: 'React', description: 'Front-End Development', icon: react },
        { name: 'React Native', description: 'Mobile Development', icon: react },
        { name: 'Adobe XD', description: 'UI/UX Design', icon: xd },
        { name: 'Figma', description: 'UI/UX Design', icon: figma },
      ],
      info: [
        { 
          title: `PLATFORMS`,
          content: `WEB, MOBILE`
        },
        { 
          title: `DURATION`,
          content: `10 MONTHS`
        },
        { 
          title: `FOCUS AREA`,
          content: `FINTECH, UX/UI DESIGN`
        },
        { 
          title: `COMPANY WEBSITE`,
          content: <a rel="noreferrer" target="_blank" href="https://www.wio.io">WIO.IO</a>
        },
        { 
          title: `BASED IN`,
            content: `DUBAI, UAE`
          },
      ],
      details: [
        {
          subtitle: 'Software Engineer & UI/UX Designer',
          title: 'WORK AND TEAM',
          text: <>I was instrumental in the design and development of Wio's fintech platform, working across three main products: SME Bank (Mobile/Web),
                 Retail, and WioGo (Bank for kids). My role required balancing responsibilities as both a front-end developer and a UI/UX designer,
                 where I developed front-end applications and designed new user experiences that helped define and evolve the visual systems of the platform.
          </>
        },
        {
          subtitle: 'IMPROVEMENTS',
          text: <><p>• Successfully developed front-end applications for user and customer registration and administration, significantly improving user engagement.</p>
          <p>• Designed innovative layouts and experiences that contributed to the strategic direction of Wio products, establishing a unique visual language.</p>
          <p>• Received specialized mentorship that continuously enhanced the quality and impact of my design work, setting new standards within the company.</p>
          </>
        },
      ],
      cards: [
        {
          subtitle: 'CHALLENGE',
          title: 'Building a Fintech Platform from Scratch',
          desc: `The challenge was to create a cutting-edge fintech platform from the ground up, requiring the integration of advanced design and development skills
          to meet the high expectations of a rapidly growing market.`
        },
        {
          subtitle: 'GOAL',
          title: 'Deliver a Seamless and User-Friendly Experience',
          desc: `The goal was to deliver a user-friendly experience across all Wio products, ensuring that the platform is both accessible and visually appealing
                 to a wide range of users, from SMEs to children.`
        },
        {
          subtitle: 'RESULT',
          title: '$542 Million Growth and Significant Market Impact',
          desc: `Through innovative design and development, Wio achieved massive growth, raising $542 million in just two investment rounds.
          My contributions in both engineering and design were pivotal in establishing Wio as a leading fintech platform, with a unique workflow
          that set it apart in the industry.`
        }
      ]
    },
    {
      id: 3,
      role: 'SOFTWARE DEV (INTERN)',
      title: "ARCELORMITTAL",
      desc: `ArcelorMittal is a leading global steel and mining company, striving to build a better world with smarter steels.
      Their innovative processes aim to be more efficient, use less energy, and emit significantly less carbon.`,
      headerImage: amHeader,
      image: amBackground,
      preview: `Enhanced user experience for a global audience by leading the development of mobile and web applications,
      and facilitated a robust user testing strategy on a tight budget.`,
      stacks: [
        { name: 'React', description: 'Front-End Development', icon: react },
        { name: 'Express', description: 'Backend Development', icon: express },
        { name: 'MongoDB', description: 'NoSQL Database', icon: mongo },
        { name: 'TypeScript', description: 'Typed Language', icon: typescript },
      ],
      info: [
        { 
          title: `PLATFORMS`,
          content: `WEB, MOBILE`
        },
        { 
          title: `DURATION`,
          content: `1 YEAR`
        },
        { 
          title: `FOCUS AREA`,
          content: `USER EXPERIENCE`
        },
        { 
          title: `COMPANY WEBSITE`,
          content: <a rel="noreferrer" target="_blank" href="https://corporate.arcelormittal.com">ARCELORMITTAL.COM</a>
        },{ 
          title: `BASED IN`,
            content: `SANTA CATARINA, BR`
          },
      ],
      details: [
        {
          subtitle: 'Software Engineer & UX/UI Contributor',
          title: 'WORK AND TEAM',
          text: <>I played a key role in improving the user experience of ArcelorMittal's global web presence,
                 working on the design and development of both web and mobile applications.
                 My contributions extended to UX/UI design, where I had a strong influence on daily planning, working alongside a diverse and talented team.
          </>
        },
        {
          subtitle: 'MILESTONES',
          text: <><p>• Developed and implemented high-impact front-end applications, enhancing usability for over 200k users worldwide.</p>
          <p>• Played a pivotal role in daily planning sessions, driving UX/UI initiatives that led to significant improvements in user satisfaction.</p>
          <p>• Managed and executed a comprehensive user testing strategy with minimal resources, optimizing product feedback and iteration cycles.</p>
          </>
        },
      ],
      cards: [
        {
          subtitle: 'CHALLENGE',
          title: 'Improving User Experience Across Diverse Platforms',
          desc: `The primary challenge was to revamp ArcelorMittal's online presence, ensuring a seamless user experience across both web and mobile platforms
          for a global audience, all while working within the constraints of a tight budget and limited resources.`
        },
        {
          subtitle: 'GOAL',
          title: 'Deliver a High-Performance and User-Friendly Experience',
          desc: `The goal was to create a user-friendly, high-performance interface that caters to the needs of over 150 countries,
                 integrating cutting-edge technology and design principles to ensure a consistent and enjoyable user experience.`
                },
        {
          subtitle: 'RESULT',
          title: 'Global User Satisfaction Improved, Notable Enhancements in UX/UI',
          desc: `The efforts led to a marked improvement in global user satisfaction, with the new interface receiving positive feedback for its accessibility and performance.
          The UX/UI enhancements were instrumental in driving these results, reinforcing ArcelorMittal's reputation for technological innovation. Additionally,
          my work helped streamline internal processes, contributing to the successful delivery of key projects within strict deadlines.`
        }
      ]
    },
    {
      id: 4,
      role: 'SOFTWARE ENGINEER',
      title: "CONTROLSUL",
      desc: `Controlsul is a multinational company which focuses on business management,
              tax service, tributary service, business inteligence and business analysis.
      It creates accessibility and provides confidence when taking risky decisions to any company that put their trust on.`,
      headerImage: csHeader,
      image: csBackground,
      preview: `Revitalized internal management with a 43% boost in profitability and a
                79% reduction in B2C drop rates through innovative software solutions.`,
      stacks: [
        { name: 'React', description: 'Front-End Development', icon: react },
        { name: 'VueJS', description: 'Front-End Development', icon: vuejs },
        { name: 'Next.js', description: 'SSR and Static Sites', icon: next },
        { name: 'MongoDB', description: 'NoSQL Database', icon: mongo },
      ],
      info: [
        { 
          title: `PLATFORMS`,
          content: `WEB`
        },
        { 
          title: `DURATION`,
          content: `1.5 YEARS`
        },
        { 
          title: `FOCUS AREA`,
          content: `INTERNAL MANAGEMENT`
        },
        { 
          title: `COMPANY WEBSITE`,
          content: <a rel="noreferrer" target="_blank" href="https://www.controlsul.com">CONTROLSUL.COM</a>
        },{ 
          title: `BASED IN`,
            content: `PARANÁ, BR`
          },
      ],
      details: [
        {
          subtitle: 'Software Engineer & Workflow Optimizer',
          title: 'WORK AND TEAM',
          text: <>I contributed to enhancing the company's internal management systems by working on
          various software solutions, most notably the "Contratos e Faturamento" system, which replaced an
          outdated internal management method.
          </>
        },
        {
          subtitle: 'IMPROVEMENTS',
          text: <><p>• Developed concepts, sketches, graphics, and high-fidelity executions for both new and existing products.</p>
          <p>• Supported design efforts using all available insights, including quantitative data, site metrics, customer feedback, and usability findings.</p>
          <p>• Presented work to business and technology leadership.</p>
          </>
        },
      ],
      cards: [
        {
          subtitle: 'CHALLENGE',
          title: 'Outdated Internal System Was Hindering Workflow Efficiency',
          desc: `Modernizing an outdated internal management system that was hindering workflow efficiency and scalability.`
        },
        {
          subtitle: 'GOAL',
          title: 'Develop a Streamlined and Accessible Software Solution',
          desc: `To create a more accessible and optimized software solution that integrates various
                  tools to improve workflow and enhance employee productivity.`
        },
        {
          subtitle: 'RESULT',
          title: 'Profitability Increased by 43% and B2C Drop Rates Reduced by 79%',
          desc: `The newly developed system led to a 43% increase in profitability, with all users reporting
          that the improved software accessibility was a key factor. Employee productivity was notably enhanced
          through the integration of multiple tools into a single optimized platform. Additionally, the new system
          improved B2C services by reducing customer drop rates by 79% through the implementation of simple yet effective
          tools like an email notifications microservice. Furthermore, two brand-new products were shipped, contributing
          to a substantial increase in company profits.`
        }
      ]
    },
    
    
  ];
  