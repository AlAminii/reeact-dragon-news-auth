import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 

"react-icons/fa";

import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'


const RightSide = () => {
    return (
        <div>
           <div className="p-4 space-y-3 mb-6">
            <h1 className="text-3xl ">Login With</h1>
            <button className="btn w-full btn-outline ">
                <FaGoogle></FaGoogle>
                Google
                </button>
            <button className="btn w-full btn-outline">
                <FaGithub></FaGithub>
                Github
                </button>
           
           </div>

           <div className="p-4  mb-6">
            <h1 className="text-3xl mb-4 ">Find Us On</h1>
            <a className="flex items-center border rounded-t-lg space-x-2">
                <FaFacebook></FaFacebook>
                <span>Facebook</span>
                
                </a>
            <a className="flex items-center border-x space-x-2">
                <FaTwitter></FaTwitter>
                <span>Twiter</span>
                
                </a>
            <a className="flex items-center border rounded-b-lg space-x-2">
                <FaInstagram></FaInstagram>
                <span>Instagram</span>
                
                </a>
         
          

           </div>
           {/* q zone */}

           <div className="p-4 space-y-3 mb-6">
            <h1 className="text-3xl ">Q-Zone</h1>
            
           <img src={qzone1} alt="" />
           <img src={qzone2} alt="" />
           <img src={qzone3} alt="" />
           </div>

        </div>
    );
};

export default RightSide;