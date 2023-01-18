import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Myproject1.png';

function Page() {
  return (
    <div>
      <div className="container-fluid " >
      <nav>
        <div className="row">
          <div className="col-sm-3">
        <div className='logo '>
        <img style={{width:"75%"}} src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="" /> 
        {/* <h1>Rubixie</h1> */}
        </div>
        </div>
        
        <div className="col-sm-9">
        <ul>
          <li>HOME</li>
          <li>SERVICE</li>
          <li>PRODUCTS</li>
          <li>AI INTERNSHIP</li>
          <li>CAREER</li>
          <li>BLOG</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
        </div>
      
        </div>
        
      </nav>
      <div className="image">
        <div className="container">
          <div className="col-sm-3">
            <img src={Logo} alt="" />
            <span>CARVING FUTURE <br />TECHNOLOGY PROFESSIONAL <br />
            OUT OF YOUNG MINDS</span>
          </div>
        </div>
      </div>
 
      </div>
    </div>
  )
}

export default Page
