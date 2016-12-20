var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/FavouriteNews">Favourite News</Link></li>
           <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>



           <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
