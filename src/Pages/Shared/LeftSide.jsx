
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1>All Categories</h1>
            {
            //  
            categories.map(categorie => <Link
            className="block ml-4 text-xl"
            key={categorie.id}
            to={`/category/${categorie.id}`}
            
            >{categorie.name}</Link>)
            }
          
        </div>
    );
};

export default LeftSide;