import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/j-transparent-background.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

 const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'm', 'e', 's',',']
    const jobArray = ['a','s','p','i','r','i','n','g', ' ', 's','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r']
    
     
     return (
         <div className="container home-page">
             <div className="text-zone">
                 <h1> 
                 <span className={letterClass}>H</span>
                 <span className={ `${letterClass} _12`}>i,</span>
                 <br />
                 <span className={`${letterClass} _13`}>I</span>
                 <span className={ `${letterClass} _14`}>'m</span>
                 <img src={LogoTitle} alt="developer" />
                 <AnimatedLetters letterClass={letterClass}
                 strArray={nameArray}
                 idx = {15}/>
                 <br />
                 <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray}
                 idx = {10}/>
                 </h1>
                 <h2>Machine Learning / Full Stack / Business Fundamentals</h2>
                 <Link to="/contact" className='flat-button'>CONTACT ME</Link>

             </div>

         </div>
     );
 }


export default Home