import {Routes, Route , Link , useLocation} from 'react-router-dom';
import LabTechnician from '../Lab/LabTechnician';
import ResultReporting from '../Result/ResultReporting';
import './Navigation.css'

function Navigation(){
  
  const location = useLocation();
  return (
    <>

      <header className='navbar' >
        
        
        <ul className='navlist'>
            <li >
              <Link  to="/labtechnician" className={location.pathname === '/labtechnician' ? 'listItems active' : 'listItems'} >Home</Link>
            </li>
            <li>
              <Link to="/news" className={location.pathname === '/news' ? 'listItems active' : 'listItems'} >News</Link>
            </li>
            <li className='rep'>
              <Link to="/result" className={location.pathname === '/result' ? 'listItems active' : 'listItems'} >Report</Link>
            </li>
            
        </ul>
        <div ><Link to="/profile"  className='profile'><img  src="" className="profile-pic" /></Link></div>
      

      </header>

    </>
  );
}

export default Navigation;