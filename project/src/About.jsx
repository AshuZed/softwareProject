import { Link, NavLink, Route, Routes } from "react-router-dom";
import ResultReporting from "./Result/ResultReporting";


function About(){
    return(
        <>
            <h1>About page</h1>
            {/* <header>
                <nav>
                    <ul>
                        <li><NavLink to='' >Home</NavLink></li>
                        <li><NavLink to='report' >Report</NavLink></li>
                    </ul>
                </nav>
            </header> */}
            <header className='navbar' >
        
        
        <ul className='navlist'>
            <li >
              <Link  to="" className={location.pathname === '/labtechnician' ? 'listItems active' : 'listItems'} >Home</Link>
            </li>
            <li>
              <Link to="news" className={location.pathname === '/news' ? 'listItems active' : 'listItems'} >News</Link>
            </li>
            <li className='rep'>
              <Link to="result" className={location.pathname === '/result' ? 'listItems active' : 'listItems'} >Report</Link>
            </li>
            
        </ul>
        <div ><Link to="/profile"  className='profile'><img  src="" className="profile-pic" /></Link></div>
        {/* <Routes location='' >
          <Route path="/about/result" element={<ResultReporting />} />
        </Routes>
       */}

      </header>
        
        </>
    );

}
export default About;