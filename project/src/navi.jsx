import {Routes, Route , Link , useLocation} from 'react-router-dom';
import Home from './Home';
import Result from './Result';
import About from './About';
import Login from './login';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';
import ResultReporting from './Result/ResultReporting';

function Navi(){
    const getData = (u, s, p) => {
        console.log(u, s, p);
    }
    return(
      <>
        {/* <header>
          <nav>
            <ul>
              <li><Link to='/' >Login</Link></li>
              <li><Link to='/home' >Home</Link></li>
              <li><Link to='/about' >About</Link></li>
              <li><Link to='/result' >Result</Link></li>
            </ul>
          </nav>
        </header> */}
        <Routes>
          <Route path='/' element={<div><Login  /><Login  /></div>} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/about/result" element={<ResultReporting />} />
          <Route  path='/result/:id' >
          
            <Route index element={<Result />} />
            <Route path='a1' element={<A1 />} />
            <Route path='a2' element={<A2 />} />
            <Route path='a3' element={<A3 />} />

        
          </Route>
          

        </Routes>
      </>
      );
}

export default Navi;