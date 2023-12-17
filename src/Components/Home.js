import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Home() {
    {document.body.style.backgroundcolor="#b7acac"};
  return (
    <>
    <div className="container text-center">
        <h1 className="my-2">Welcome to student task scheduler system</h1>
        <div className="container text-center my-5">
            <div className="d-grid gap-3 col-6 mx-auto">
                <div class="card" style={{width:"18rem"}}>
                    <img src="https://sya.utl.gov.in/public/assets/images/admin_login.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <Link to="/login" className="btn btn-danger">Admin Login</Link>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSDjV9Wss1XUa3ppC6Ow5SOBohiIZH3aeSQ&usqp=CAU" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <Link to="/signup" className="btn btn-danger">student Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home