import React from 'react';
import {hashHistory} from 'react-router';


export default class login extends React.Component
{

/*this is a ajax function for the URL of saving of login ID and password*/
Loginfun()
{
var uname=document.getElementById('userid').value;
var pass=document.getElementById('password').value;

  $.ajax({
  url: "http://localhost:8081/users/login",
  type: "POST",
  data:'username='+uname+'&password='+pass,
  success : function(msg)
  {
  console.log("successfully loged to database");

    alert("succesfully loggedin");
    hashHistory.push('/#/home');
  }.bind(this),
  error: function(err){
    alert("check the username and password");
 }.bind(this)
});

}
/*closed ajax function*/



  render()
   {
      return(
    <div>
      <div className="container">
           <div className="row">
                <div className="well">
                  <center>
                    <b>  Enter Username :</b><input type="text" class="form-control" id="userid" style={{"width":"50%"}}/><br/><br/>
                    <b> Enter  Password: </b><input type="password" class="form-control" id="password"  style={{"width":"50%"}}/>
                             <p className="help-block">
                                        *fill all details to login
                                 </p>
                      <div className="checkbox">
                      <input type="checkbox" /> remember me?
                          </div>
                      </center>
                            <input type="button"  value="Login" className="btn btn-success" onClick={this.Loginfun.bind(this)} style={{"margin-left":"45%"}}/>
                </div>
             </div>
      </div>
</div>


          )
  }
}
