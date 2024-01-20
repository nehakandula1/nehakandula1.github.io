import  Me from './mypic.png'
import './home.css'

export const Home = () => {
    return (
      <div>
      <div className='gridContain'>
          <h2 className='aboutMe'>About Me</h2>
          <p className='aboutMePara'>My name is Neha and I am Computer Science student at the University of Texas at Dallas. I am 
          mainly interested in AI, machine learning, and app development. Additionally, I have a certification as a AWS Cloud Practitioner
          I am also currently working as an intern at State Farm. Through my internship I have experience with AWS, reinforcement learning 
          functions as well as UI development. Apart from that I work on projects on my own time including: this website, an app named Bibliophile 
          which allows book lovers to track progress, write notes, and rate books, a "race to the finish line" game, and a website I helped
          create during a hackathon in State Farm that uses a weather API to warn users of inclement weather in the area. Apart from these
          I also have more projects I continously work on such as an AI chatbot & this website! Please click on the links above to learn more about my
          projects and experience as well as a link to my LinkedIn. Thank you for visiting! </p>
      </div>


      <div className='gridContainHome'>
      <img src={Me} className='myPic'/>
          <h1 style={{fontSize: "5rem"}} className='name'>Neha Kandula</h1>
          <h2 className='greeting'>Welcome to my website!</h2> 
      </div>
      </div>

      
    );
};