
import {
  Outlet, 
  Link, 
  useLocation, 
} from "react-router-dom";
import React from 'react';
import { 
  useNavigate, 
  // useSearchParams,
} from "react-router-dom";
import Cookies from 'js-cookie';

function Layout() {
  const navigate = useNavigate();
  const location = useLocation()


  function logout() {
    console.log('log out')
    Cookies.remove('IdToken')
    return navigate('/auth/login')
  }


  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh"}}>
        <div style={{ display: "flex", flexDirection: "row", height: "100%", flex: 1}}>
          <div style={{ height: '100%' }}>
            <div style={{ height: '100%' }}>
              <ul style={{ listStyleType: "none", margin: "0", padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <li style={{ marginLeft: "auto", marginRight: "auto", marginTop: "40px", marginBottom: "40px" }}>
                  <Link to="/" type="button" class="btn btn-secondary" style={{ backgroundColor: 'transparent', border: 0, padding: 0 }}>
                    <img width="40px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px' }}/>
                  </Link>
                  <ul style={{ paddingLeft: '15px' }} class="dropdown-menu">
                    <li style={{ cursor: 'pointer' }} onClick={logout}>Log out</li>
                  </ul>
                </li>
                <div style={{ flex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                  <li style={{ paddingLeft: "25px", paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", marginTop: "20px", marginBottom: "20px", borderLeft: location.pathname.includes('digitalworkers') ? '5px solid grey' : '5px solid transparent' }}>
                    <Link to="/">
                      <img style={{filter: 'invert(1)'}} src={require('./resources/digitalworkers.png')} alt="Digital assistants"/>
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "25px", paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", marginTop: "20px", marginBottom: "20px", borderLeft: location.pathname.includes('marketplace') ? '5px solid grey' : '5px solid transparent' }}>
                    <Link to="/reports">
                      <img style={{filter: 'invert(1)'}} src={require('./resources/marketplace.png')} alt="Reports"/>
                    </Link>
                  </li>
                </div>
                <li style={{ marginLeft: "auto", marginRight: "auto", marginTop: "40px", marginBottom: "40px" }}>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'transparent', border: 0, padding: 0 }}>
                    <img width="40px" src={require('./resources/UserAvatar.png')} style={{ border: "1px solid white", borderRadius: '50px', padding: '1px' }} alt="User avatar"/>
                  </button>
                  <ul style={{ paddingLeft: '15px' }} class="dropdown-menu">
                    <li style={{ cursor: 'pointer' }} onClick={logout}>Log out</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', height: '100vh' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;