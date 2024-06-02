import { useParams } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Navbar from "./Pages/Shared/Navbar";
import RightSide from "./Pages/Shared/RightSide";

const News = () => {

const {id} = useParams()
    return (
       <div>
 <Header></Header>

 <Navbar></Navbar>
        
         <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                News Details
                <p>{id}</p>

            </div>
            <div  className="border">
    
<RightSide></RightSide>
            </div>
            
        </div>
       </div>
    );
};

export default News;