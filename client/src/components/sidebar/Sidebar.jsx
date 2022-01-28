import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar(){
    const [cats,setCats]= useState([]);


    useEffect(()=>{
        const getCats = async () => 
        {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats();

    },[])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://lamenteesmaravillosa.com/wp-content/uploads/2016/02/Mujer-con-las-manos-abiertas-disfrutando-de-la-naturaleza.jpg" alt="" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper erat at egestas suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className='link'>
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    
                ))}
                
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-pinterest"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
            </div>
            </div>
        </div>
    )
}