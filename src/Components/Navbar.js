import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    let location = useLocation();
    const navigate = useNavigate();
    const handlelogout=()=>{
      localStorage.removeItem("token");
      navigate("./login")
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid text-end">
    <Link className="navbar-brand" to="#">Student Management system</Link>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
    {!localStorage.getItem("token") ?(<></>):(<Link className="btn btn-primary mx-2" to="/" onClick={handlelogout}>Logout <i className="fa-solid fa-right-from-bracket"></i></Link>)}
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar