import { useState } from "react";
import React from "react";
import { Navigate,  useNavigate} from "react-router-dom";
function Login(props){

    const [username , setUsername] = useState();
    const [spacializtion , setSpacializtion] = useState();
    const [password , setPassword] = useState();

    let navigate = useNavigate();

    function husername(e){
        setUsername(e.target.value);
    }
    function hspacializtion(e){
        setSpacializtion(e.target.value);
    }
    function hpassword(e){
        setPassword(e.target.value);
    }

    function hsubmit(e){





        e.preventDefault();


        switch (spacializtion) {
            case 'admin':
              navigate('/admin');
              break;
            case 'doctor':
              navigate('/result');
              break;
            case 'labtechnician':
              navigate('/labtechnician');
              break;
            default:
              navigate('/login', { replace: true });
              break;
          }

        
        props.onSubmit(username, spacializtion , password);
    }
    
    return(
      
        <div>
            <form onSubmit={hsubmit}>
                <input type="text" placeholder="username" value={username} onChange={husername} />
                <input type="text" placeholder="spacializtion" value={spacializtion} onChange={hspacializtion}/>
                <input type="password" placeholder="password" value={password} onChange={hpassword}/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default Login;