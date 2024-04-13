import { Link } from "react-router-dom";


function New(){
    const id = "doctor";
    return(
        <>
            <ul>
                <li><Link to='/result/:id' >A1</Link> </li>
                <li><Link to='/result/a2' >A2</Link> </li>
                <li><Link to='/result/a3' >A3</Link> </li>
            </ul>
            
        </>
    );
}

export default New;
