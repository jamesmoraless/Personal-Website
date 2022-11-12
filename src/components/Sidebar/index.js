import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/j-transparent-background.png'
import LogoSubtitle from '../../assets/images/james-transparent-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = "about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/james-morales-470a161b2">
                    <FontAwesomeIcon icon={faLink} color='#4d4de'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/jamesmoraless">
                    <FontAwesomeIcon icon={faGithub} color='#4d4de'/>
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar