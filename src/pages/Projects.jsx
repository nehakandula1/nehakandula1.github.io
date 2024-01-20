import './projects.css'
import ReactPlayer from 'react-player'
import Vid from './vid.mp4'

export const Projects = () => {
    return (
        <div>
            <h2 className='header'>
                I have 5 main projects. They'll be detailed below:
            </h2>
            
                <p className='numOne'>
                1. This Website: My personal website you are currently in! It uses Vite+React and I continously update it. This is a renovated website which was initially written in HTML+CSS so I have experience in that as well!
                </p>
            
            

                <p className='numTwo'>
                2. WeatherUp - July 2023: WeatherUp was the product of a State Farm hackathon. It also uses Vite+React along with a <br /> weather API which sends users notifications
                when there's inclement weather coming their way. The website notifies users to <br /> put their vehicles inside, saving State Farm from a lot of claims and 
                </p>
            
            

                <p className='numThree'>
                3. Bibliophile - October 2023 to Present: Bibliophile is an android app I am developing in Kotlin. It allows for users to create <br /> notes about books and rate them. It uses the GoodReads API. I used the Room Database 
                </p>
            
            

                <p className='numFour'>
                4. Racing Game - Single-player race to the finish line while collecting tokens. I created the entire car & environment using <br /> Maya. I developed a point system, movement functions, and car controller in Unity, mainly in C#. 
                </p>
           
            

                <p className='numFive'>
                5. AI Chatbot - This is a new project I recently started in order to learn more about AI! 
                </p>
            
                <div className='vidContainer'>
            <video loop autoPlay className='vid'>
                <source src={Vid} type="video/mp4"/>
            </video>
            </div>
        </div>
    );
};