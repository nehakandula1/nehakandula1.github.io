import './experience.css'
import aws from './aws.png'
import sf from './sf.png'
import utd from './utd.png'


export const Experience = () => {
    return (
        <div>
        <div className='container'>
            <h2>Experience</h2>
            <p>
            I starting as a Software Engineering Intern at State Farm last Worked on the backend for PolicyCenter (PC) using Postman and Java
            Renovated existing XML containers in PolicyCenter which reduced user latency & data load times, and added search tools and functions
            Wrote SQL database retrieval query functions to retrieve and display information on a webpage, developed unit tests, and integrated fixes
            Developed frontend for a React-based website that utilizes a weather API to send SMS to customers warning them of inclement weather; mainly used Vite & CSS
            Helped orchestrate migration of team applications to AWS
            Placed 5th in an AWS Deepracer tournament with reinforcement learning functions, improved speed on the map, improved accuracy of staying on course
            Agile environment</p>

            

            <p>I also have a AWS Cloud Practitioner certification. Here is the certification number: 81N908XCVJQEQC3H. </p>

            

            <p>I've taken rigorous classes such as: Intro to Machine Learning, Data Structures and Algorithms, Systems Programming in Unix, Linear Algebra, Database Systems, Programming Language Paradigms, Software Engineering, Operating System Concepts, Computer Science 1 & 2, Discrete Mathematics 1 & 2, Computer Architecture, and Probability & Statistics </p>
        </div>

        <div className='pics'>
                <img src={aws} className='awsPic'/>
                <img src={sf} className='sfPic'/>
                <img src={utd} className='utdPic'/>
            </div>


        </div>
    );
};