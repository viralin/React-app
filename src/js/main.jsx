
import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import ContactUs from './components/ContactUs.jsx';
import NavBar from './components/NavBar.jsx';
import FavNews from './components/FavouriteNews.jsx';
import login from './components/login.jsx';

class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
             <Route path="/" components={MainComponent} >
             <Route path="/home" components={HomeComponent}/>
             <IndexRoute components={HomeComponent} />
             <Route path="/about" components={About}/>
             <Route path="/contactUs" components={ContactUs}/>

             <Route path="/FavouriteNews" components={FavNews}/>
             <Route path="/login" components={login}/>

       </Route>



</Router>,document.getElementById('content'));
